const { urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/publications')
    .then(()=>console.log('Connected to Mongodb...'))
    .catch(err => console.error('Error connecting to Mongodb...', err));

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(express.static('public'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app is listening on port '+ port))