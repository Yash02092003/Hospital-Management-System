const mongoose = require('mongoose');
const express = require('express');
const Product = require('../model/Product');
const router = express.Router();

router.get('/product/home' , (req , res) => {
    res.send('Medicine Home Page');
})

router.get('/product/add' , (req , res) => {
    res.send('Form to add a new product');
} )

router.post('/product/add' , async (req , res) => {
    let {name , price , desc} = req.body;
    let product = new Product({name , price , desc});
    await product.save();
    res.redirect('/product/home');
})

router.get('/product/:id' , async (req , res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.send('Particular product');
})

router.get('/product/:id/edit' , async (req , res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.send('Form to edit a particular Product');
})

router.patch('/product/:id/edit' , async (req , res) => {
    let { id } = req.params;
    let { name , price , desc } = req.body;
    await Product.findByIdAndUpdate(id , {name , price , desc});
    res.send('Updateiing a specific product');
})

router.delete('/product/:id' , async (req , res) => {
    let { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/product/home');
})

module.exports = router