const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
 const routes = require('./router');
const app = express();

//Body parser para leer los datos 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Habilitar pug 
app.set('view engine', 'pug');

//carpetas para las vistas}
app.set('views', path.join(__dirname, './views'));

//cargar los archivos estaticos en public
app.use(express.static('public'));

//definir rutas de la aplicacion 
app.use('/',routes() );

 
app.listen(3000);