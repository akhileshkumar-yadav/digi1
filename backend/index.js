// express init
const express = require('express');
const app = express();
//backend run port num
const port = 5000;
const cors = require('cors')
// routing 
// app.get("/",(req,res) =>{
//     res.send("Hello World");
// })
// app.get("/product",(req,res) =>{
//     res.send("product page");
// })


const UserRouter = require('./routers/user')
// const productRouter = require('./routers/product')
const prodRouter = require('./routers/prod')
// middleman
// middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use('/user', UserRouter)
// app.use('/product', productRouter)
app.use('/prod', prodRouter)


app.listen(port, () => {
    console.log(`srever is succsessfully run ${port}`);

}) 
