<<<<<<< HEAD
const exp = require('constants');
=======
>>>>>>> e3d362a18a77efa849f1a9fbca67e17035e08144
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


<<<<<<< HEAD

// seedDoctor();
// seedPatient();

app.get('/' , (req , res) => {
    res.render('doctor/index');
})





=======
// seedDoctor();
// seedPatient();



app.get('/' , (req , res)=>{
    res.send("Hello From Root Route");
})


>>>>>>> e3d362a18a77efa849f1a9fbca67e17035e08144
app.listen(PORT , () => {
    console.log(`Server Connected At PORT : ${PORT}`);
})