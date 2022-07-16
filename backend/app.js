const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());

// Middleware
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.CONNECTION_STRING, {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'communsale-database'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log('Database is not connected ' + err);
})

// Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})