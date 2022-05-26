const books = require('./routes/books');

const express = require('express');
const mongoose = require('mongoose');
const app = express();



//MONGODB CONNECTION 
mongoose.connect('mongodb://localhost/booksdir')
    .then(() => console.log('Successfully connected to local mongoDB...'))
    .catch(err => console.error('ERROR:',err));

//app.use(express.json()) is necessary to read json request body.
app.use(express.json());


app.use('/api/books',books);



//LISTEN FOR CONNECTIONS MADE TO API
app.listen(3000, () => {
    console.log('Listening on port 3000...')
});