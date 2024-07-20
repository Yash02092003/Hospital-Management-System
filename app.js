const exp = require('constants');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { seedDoctor, seedPatient } = require('./seed');
const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/Hospital-Management')
.then( () => {
    console.log('Server Connected At PORT : 27017');
})
.catch( (e) => {
    console.log('Some error Occurred' , e);
})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));



// seedDoctor();
// seedPatient();

app.get('/' , (req , res) => {
    res.render('doctor/index');
})





app.listen(PORT , () => {
    console.log(`Server Connected At PORT : ${PORT}`);
})