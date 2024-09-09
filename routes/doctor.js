const express = require('express');
const Doctor = require('../model/Doctor');
const router = express.Router();

router.get('/doctor/add' , async (req , res) => {
    res.send('Form to create New Doctor');
})

router.post('/doctor/add' , async (req , res) => {
    let {name , consultationFee} = req.body;
    let doc = new Doctor({name , consultationFee});
    await doc.save();
    res.send('New Doctor Profile Created');
})

router.get('/doctor/:id/update' , async (req , res) => {
    let doc = await Doctor.findById(req.params.id);
    res.send('Form with Current Doctor details and Update it');
})

router.patch('/doctor/:id/update' , async (req , res) => {
    let { id } = req.params;
    let {name , consultationFee} = req.body;
    await Doctor.findByIdAndUpdate(id , {name , consultationFee});
    res.send('Doctor Updated');
})

router.delete('/doctor/:id/delete' , async (req , res) => {
    let { id } = req.params;
    await Doctor.findByIdAndDelete(id);
    res.send('Doctor Deleted');
})

module.exports = router