// --- ENRUTADOR PRODUCTS --- // 

const productsController = require('../controllers/productsController'); 

const express = require('express'); 
const router = express.Router();

router.get('/', productsController.all); 

module.exports = router; 