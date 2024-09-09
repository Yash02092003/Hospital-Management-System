const mongoose = require('mongoose');
const {Schema , model} = mongoose

let productSchema = new Schema({
    name : {
        type : String ,
        required : true 
    } ,
    price : {
        type : Number ,
        required : true
    } ,
    desc : {
        type : String ,
        required : true
    } 
});

let Product = model('Product' , productSchema);

module.exports = Product;