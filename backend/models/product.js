const {Schema,model} = require('../connection')
const productSchema = new Schema({
    detail:String,
    rating:String,
    memory:String,
    display:String,
    cameraQuality:String,
    bettery:String,
    generation:String,
    warrenty:String,
    price:String,
    discount:String,
});

module.exports = model('product',productSchema);