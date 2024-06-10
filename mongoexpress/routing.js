const express = require('express');
const routing = express.Router();
const nodes = require('./myNotes');
routing.get('/notes', nodes.getNotes);
routing.get('/update/:id', nodes.updateNotes);
routing.get('/delete/:id', nodes.deleteNotes);
routing.get('/find/:id',nodes.findwithId);
 routing.all('*', nodes.invalid);
module.exports = routing;
