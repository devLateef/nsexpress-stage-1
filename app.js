const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userroutes');
const db = require('./config/db');
const port = process.env.PORT || 8001;

db()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});


app.use('/user',userRoutes);
app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`);
});