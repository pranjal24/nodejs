const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const mongoose = require('mongoose')


const port =  process.env.PORT || 8080
const uri = process.env.MONGODB_CONNECTION_STRING;

 mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>{
//     console.log("database connected");
// }).catch((err)=>{
//     console.log("database not connected"+err);
// })

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("connection establlished");
})

app.use(cors())
// app.use(express.urlencoded({extended:true}))
app.use(express.json())
// mongoDBConnection();
app.use('/',require('./src/routes/user.route'))
app.listen(port,()=>{
    console.log('port running on '+ port)
})