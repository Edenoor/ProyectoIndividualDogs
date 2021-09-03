const { Router } = require('express');
require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getDogs, createDog, getDogByName, getTemperaments, getDogById} = require('./controllers')
const router = Router();

router.get('/', getDogs)

router.post('/dog', createDog)

router.get('/dogs', getDogByName)

router.get('/temperament', getTemperaments)

router.get('/dogs/:id', getDogById)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
