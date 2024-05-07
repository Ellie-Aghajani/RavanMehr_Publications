const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/publications')
    .then(() => console.log('Connected to mongodb'))
    .catche(err => console.log(err.message));
 