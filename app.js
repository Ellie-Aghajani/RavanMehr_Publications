const { boolean } = require('joi');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/publications')
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log(err.message));
 
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageURL:String,
    tags:[String],
    stock: Number,
    date:{ type: Date, default: Date. now }
});

const Book = mongoose.model('Book', bookSchema);
async function createBook(){
    try{
        const book = new Book({
            title: 'first book',
            description: "psychology",
            imageURL:String,
            tags:['adults'],
            stock: 1
        });
        const result = await book.save();
        console.log(result);

    }
    catch(err){
        console.log('Error creating book', err.message);
    }
};
// createBook();
async function getBooks(){
    return await Book.find();

}

async function run(){
    const books = await getBooks();
    console.log(books);
};

run();

//update books:
async function updateCourse(id){
   const book = await Book.findByIdAndUpdate({_id: id}, {
        $set:{
            stock: 3
        }
    }, {new: true});
    console.log(book);
};
updateCourse('663c104357f009138c1d63d1');