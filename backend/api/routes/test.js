const express = require('express');
const mongoose = require('mongoose');
const { 
    createT, 
    getTs, 
    getT, 
    deleteT,
    updateT 
} = require('../controller/testModel');
const router = express.Router();


router.get('/', getTs); // GET all 
router.get('/:id', getT); // GET single 
router.post('/', createT); // POST new
// router.delete('/:id', deleteT) // DELETE
// router.patch('/:id', updateT) // UPDATE

module.exports = router