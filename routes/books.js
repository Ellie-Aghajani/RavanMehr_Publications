const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongobd://localhost/publications')
    .then(()=> console.log('Connected to mongodb...'))
    .catch(err => console.error('Error connecting to mongodb', err));

const Book = mongoose.model('Book', new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:5,
        maxLength:50,
    }
}));



router.get('/api/books', async(req, res) => {

});
router.post('/api/books', async(req, res) => {
    
});
router.put('/api/books/:id', async(req, res) => {
    
});
router.delete('/api/books/:id', async(req, res) => {
    
});
router.get('/api/books/:id', async(req, res) => {
    
});


module.exports = router;