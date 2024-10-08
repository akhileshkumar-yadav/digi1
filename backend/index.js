// express init
const express = require('express');
const app = express();
//backend run port num
const port = 5000;

// routing 
app.get("/",(req,res) =>{
    res.send("Hello World");
})
app.get("/product",(req,res) =>{
    res.send("product page");
})


app.listen(port,() =>{
    console.log(`srever is succsessfully run ${port}`);
    
})
