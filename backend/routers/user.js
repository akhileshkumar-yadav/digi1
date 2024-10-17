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
router.get('/getall',(req,res) => {
    // empty brackets means get all data
    Model.find()
    .then((result) => {
       res.json(result) 
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
})

// get id
router.get('/getbyid/:id',(req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'internal server error'})
        
    });
})
// get email
router.get('/getbyemail/:email',(req,res) => {
    Model.find({email:req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'internal server error'})
        
    });
})

// delete by id

router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    // then c asyncronouse function hai
    .then((result) => {
        res.json(result)
    }).catch((err) => {
       console.log(err)
       res.status(500).json({ error: 'Internal Server Error'})
        
    });
})

module.exports = router;