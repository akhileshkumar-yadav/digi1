// req
const mongoose = require('mongoose')
// angulare bracket ko hata ke usme password likhna hai 
// slas aur qus mark ke beech me database ka naam
const url ='mongodb+srv://akhileshyadav:222622@cluster0.c4vlfxy.mongodb.net/batch1?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)
// .thenc
.then((result) => {
    console.log('Connected to the database');
    
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;