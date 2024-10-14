const express = require('express')
const router = express.Router();
const Model = require('../Models/user');

router.post('/add',(req,res) =>{
    console.log(req.body)
    // storing data to mongodb
    // to add the data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
    
})

module.exports = router;