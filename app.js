const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const hbs = require('hbs')
const {urlencoded} = require('express')
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home')
const cookieparser = require('cookie-parser');
//const DB = 'mongodb+srv://aamir:9158047150@cluster0.pfznl.mongodb.net/verify-mobno?retryWrites=true&w=majority'

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,   
}).then(() => {
    console.log(`connection successful`);
}).catch((err) =>  console.log(`no connection`));




//middlewares
app.use(urlencoded({extended : false}))
app.use(cookieparser())
app.use(express.json())


//template engine
app.set('view engine','hbs')

 //routes
// 
app.use('/user',userRoute)
app.use('/',homeRoute)


app.get('/', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})
