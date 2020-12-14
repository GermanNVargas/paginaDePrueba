const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');

// --- Cuchame Express, vas a usar de Motor de Vista EJS --- //
app.set('view engine', 'ejs'); 
// --- Cuchame Express, hay una carpeta que tiene todas las vistas. Es esta... ---  //
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, '../public'))); 

app.use('/', mainRouter); 
app.use('/products', productsRouter); 

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})