const express = require("express");
const Book = require("../models/Book.js");

const router = express.Router();

/** handling Routes : // http://localhost:5050/api/books
 * Here make sure everything is running smoothly */

//Books routes
router
  .route("/")
//get all books
  .get(async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
//handle query filter
  .get(async (req, res) => {
    try {
      const { title, author, publishedYear } = req.query;
      const books = await Book.find({ title, author, publishedYear });
      res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
//create a new book
  .post(async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishedYear) {
        res.status(400).send({
          message: "all fields are required; title, author and publishedYear",
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
      };
      const book = await Book.create(newBook);
      res.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ Error: error.message });
    }
  });

router.route("/:id")
//get a single book by id
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
//update a single book by id
  .put(async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishedYear) {
        res.status(400).send({
          message: "all fields are required; title, author and publishedYear",
        });
      }
      const { id } = req.params;

      const result = await Book.findByIdAndUpdate(id, req.body);
      
      if(!result){
        res.status(404).json({message:'Oaps! Book not found'})
      }else{
        res.status(200).json({message: 'Book updated successfully'});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
//delete a single book by id
  .delete(async (req, res) => {
    try {
      
      const { id } = req.params;

      const result = await Book.findByIdAndDelete(id);
      
      if(!result){
        res.status(404).json({message:'Oaps! Book not found'})
      }else{
        res.status(200).json({message: 'Book deleted successfully'});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })


module.exports = router;
