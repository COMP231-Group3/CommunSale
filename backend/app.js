const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// require the routes
const usersRoutes = require('./routes/users');

app.use(cors());

// Middleware
app.use(express.json());

const api = process.env.API_URL;

// use the routes
app.use(`${api}/users`, usersRoutes);

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