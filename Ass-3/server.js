const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

const MONGO_URI = "mongodb+srv://Aryan:aryanbehl%402006@cluster0.x8eqkxb.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });

const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Assignment 3 - MongoDB + Mongoose CRUD');
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📚 MongoDB CRUD API is ready!`);
});