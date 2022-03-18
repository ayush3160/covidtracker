const express = require('express')

const app = express();

app.use(express.json());

app.use('/',(req,res) => {
    res.send("Hi I am server")
})

app.get('/global',(req,res) => {
    
})

app.listen(5000,() => {
    console.log("Server is Running on port 5000")
})