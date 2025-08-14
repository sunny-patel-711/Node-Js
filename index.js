const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;


const app = express(); 

app.get('',(req,resp)=>{
    // resp.send('Home Page ' + req.query.name) // Query Parameter Pass.
    resp.send('Home Page')
})

app.get('/about',(req,resp)=>{
    resp.send('About Page')
})

app.get('/contact',(req,resp)=>{
    resp.send('Contact Page')
})
app.get('/faq',(req,resp)=>{
    resp.send('Faq Page')
})

app.listen(PORT,()=>{
    console.log(`App Running at ${PORT} port`)
})