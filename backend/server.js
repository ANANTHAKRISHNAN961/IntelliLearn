const express = require('express');
const connectDB=require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app=express();

connectDB();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server is listening on the port: ${port}`)
});