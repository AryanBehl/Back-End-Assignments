const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Assignment 2 - CRUD with MVC Architecture');
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📚 MVC CRUD API is ready!`);
});