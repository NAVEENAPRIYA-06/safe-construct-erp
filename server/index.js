const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Construction ERP Server is Running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});