const {Book} = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/routetest', async (req, res) => {
    res.send('Test successful.');
});

router.post('/addbook', async (req, res) => {
    let book  = new Book({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price
    });
    book = await book.save();
    
    res.send(book);
});

router.get('/booklist', async (req, res) => {
    let books = await Book.find().sort('name').select('_id name author price');
    res.send(books);
});

router.post('/bookbyid', async (req, res) => {
    let book = await Book.findById(req.body._id).select('_id name author price');
    if (!book)  {
        res.send('No book with the given id exists.');
    }
    else    res.send(book);
});

router.put('/updatebook', async (req, res) => {
    let book = await Book.findByIdAndUpdate(req.body._id,{
        name : req.body.name,
        author : req.body.author,
        price : req.body.price
    },{
        new: true
    });

    if (!book)  {
        return res.status(404).send('No book with the given id exists. Check Again!');
    }

    res.send(book);
})

router.delete('/deletebook', async (req, res) => {
    let book = await Book.findByIdAndDelete(req.body._id);
    
    if (!book)  return res.send('No book with the iven id exists.');
    
    res.send(book); 
})

module.exports = router;