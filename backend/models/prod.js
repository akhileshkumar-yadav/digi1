const {Schema,model} = require('../connection')
const prodSchema = new Schema({
    name: String,
    price: Number,
    memory: String,
    camera: String,
    detail: String,
    file: String,
  });

module.exports = model('prod',prodSchema);