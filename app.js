const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/publications')
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log(err.message));
 