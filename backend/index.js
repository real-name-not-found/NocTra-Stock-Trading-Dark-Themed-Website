require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');


//adding something for app.get() in line 6 to line 8
const { HoldingModel } = require('./model/HoldingModel');
const { PositionModel } = require('./model/PositionModel');
const { OrdersModel } = require('./model/OrdersModel');


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());





//we will now send database data to dashbaord - this one is for holding - also this is i guess not for every user right now for each user we then need to chnage the code from line 186 to 
app.get('/allHoldings', async(req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req,res)=>{
    let allPositions = await PositionModel.find({});
    res.json(allPositions); 
});

app.get('/allOrders', async(req, res) => {
    try {
        // Get all orders sorted by most recent first
        const orders = await OrdersModel.find({}).sort({ _id: -1 });
        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send("Failed to fetch orders");
    }
});

// Endpoint to get stock prices with random updates for real-time simulation
app.get('/stockPrices', async (req, res) => {
    try {
        // Base stock data
        const stocks = [
            { name: "INFY", basePrice: 1555.45 },
            { name: "ONGC", basePrice: 116.8 },
            { name: "TCS", basePrice: 3194.8 },
            { name: "KPITTECH", basePrice: 266.45 },
            { name: "QUICKHEAL", basePrice: 308.55 },
            { name: "WIPRO", basePrice: 577.75 },
            { name: "M&M", basePrice: 779.8 },
            { name: "RELIANCE", basePrice: 2112.4 },
            { name: "HUL", basePrice: 512.4 }
        ];

        // Generate random price changes (±2%)
        const updatedStocks = stocks.map(stock => {
            // Random fluctuation between -2% and +2%
            const changePercent = (Math.random() * 4 - 2) / 100;
            const newPrice = parseFloat((stock.basePrice * (1 + changePercent)).toFixed(2));
            
            // Calculate percentage change as string with +/- sign
            const percentChange = (changePercent * 100).toFixed(2);
            const formattedPercent = `${percentChange > 0 ? '+' : ''}${percentChange}%`;
            
            return {
                name: stock.name,
                price: newPrice,
                percent: formattedPercent,
                isDown: changePercent < 0
            };
        });

        // Update holdings with new prices
        try {
            const holdings = await HoldingModel.find({});
            
            // Process each holding that matches a stock in our updated list
            for (const holding of holdings) {
                // Find matching stock
                const matchingStock = updatedStocks.find(stock => stock.name === holding.name);
                
                if (matchingStock) {
                    // Update holding price
                    holding.price = matchingStock.price;
                    
                    // Calculate net percentage change
                    const netChangePercent = ((holding.price - holding.avg) / holding.avg * 100).toFixed(2);
                    holding.net = (netChangePercent >= 0 ? "+" : "") + netChangePercent + "%";
                    
                    // Update day change with same percentage as stock update
                    const dayChangeValue = parseFloat(matchingStock.percent.replace('%', ''));
                    holding.day = matchingStock.percent;
                    
                    // Save updates to database - don't wait for completion
                    holding.save().catch(err => console.error(`Error updating holding ${holding.name}:`, err));
                }
            }
        } catch (error) {
            console.error("Error updating holdings with new prices:", error);
            // Continue with response even if holding updates fail
        }

        res.json(updatedStocks);
    } catch (error) {
        console.error("Error generating stock prices:", error);
        res.status(500).send("Failed to generate stock prices");
    }
});



//now adding buy and sell fucntionality for stocks from line 207 to line 220
app.post('/newOrder', async(req, res)=>{
    console.log("Received new order:", req.body);
    
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();
    console.log("Order saved to database");

    // After saving the order, update the holdings
    try {
        const { name, qty, price, mode } = req.body;
        
        // Find if holding already exists
        let holding = await HoldingModel.findOne({ name });
        
        if (holding) {
            // Update existing holding
            if (mode === "BUY") {
                // For buy orders, update quantity and average price
                const totalOldValue = holding.qty * holding.avg;
                const newValue = qty * price;
                const totalNewQty = holding.qty + parseInt(qty);
                const newAvgPrice = (totalOldValue + newValue) / totalNewQty;
                
                holding.qty = totalNewQty;
                holding.avg = newAvgPrice;
                holding.price = price; // Update current price
                // Calculate the net percentage with proper sign
                const netChangePercent = ((price - holding.avg) / holding.avg * 100).toFixed(2);
                holding.net = (netChangePercent >= 0 ? "+" : "") + netChangePercent + "%";
                holding.day = "+0.00%"; // Reset day change as it's a new transaction
                await holding.save();
                console.log("Updated existing holding after BUY:", holding);
            } else if (mode === "SELL") {
                // For sell orders, reduce quantity but keep the average price
                const remainingQty = holding.qty - parseInt(qty);
                
                if (remainingQty <= 0) {
                    // If no shares left, remove the holding
                    await HoldingModel.deleteOne({ name });
                    console.log("Deleted holding after SELL (no shares left):", name);
                } else {
                    // Update with remaining shares
                    holding.qty = remainingQty;
                    holding.price = price; // Update current price
                    // Calculate the net percentage with proper sign
                    const netChangePercent = ((price - holding.avg) / holding.avg * 100).toFixed(2);
                    holding.net = (netChangePercent >= 0 ? "+" : "") + netChangePercent + "%";
                    holding.day = "+0.00%"; // Reset day change as it's a new transaction
                    await holding.save();
                    console.log("Updated existing holding after SELL:", holding);
                }
            }
        } else if (mode === "BUY") {
            // Create new holding for buy orders (only if it doesn't exist)
            const newHolding = new HoldingModel({
                name: name,
                qty: qty,
                avg: price,
                price: price,
                net: "+0.00%",
                day: "+0.00%",
            });
            await newHolding.save();
            console.log("New holding created:", newHolding);
        }
        
        console.log("Holdings updated successfully");
        res.send("Order Saved and Holdings Updated!");
    } catch (error) {
        console.error("Error updating holdings:", error);
        res.status(500).send("Order saved but failed to update holdings");
    }
});



app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(url);
    console.log("Connected to DB");
});




