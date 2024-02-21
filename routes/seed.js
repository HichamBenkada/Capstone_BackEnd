const express = require("express");

const router = express.Router();

//Models
const User = require("../models/User");
const Book = require("../models/Book");
const Comment = require("../models/Comment");

//Data Collection:
const data = require("../data/data");

//mongoDB Database seeding:
router.get("/", async (req, res) => {
  try {
    //inserting users collection
    await User.deleteMany({});
    data.users = await Promise.all(
      data.users.map(async (user) => {
        return new User({
          username: user.username,
          email: user.email,
          password: user.password,
        }).save();
      })
    );
    //  console.log("users after saved",data.users);//checked
    let userIds = await data.users.map((user) => user._id);
    //    console.log("users ids ",userIds);/checked

    //inserting Book collection
    await Book.deleteMany({});
    data.books = await Promise.all(
      data.books.map((book) => {
        return new Book({
          userId: userIds[Math.floor(Math.random() * userIds.length)],
          title: book.title,
          author: book.author,
          imageURL: book.imageURL,
          description: book.description,
        }).save();
      })
    );

    // await Post.insertMany(Books);
    // console.log("Past after saved",data.books) checked
    let bookIds = await data.books.map((book) => book._id);

    // console.log("post id after saved",bookIds) checked

    await Comment.deleteMany({});
    data.comments = await Promise.all(
      data.comments.map((comment) => {
        const index = Math.floor(Math.random() * userIds.length);
        return new Comment({
          content: comment.content,
          userId: userIds[index],
          bookId: bookIds[index],
        }).save();
      })
    );
    console.log("comments after saved",data.comments);
    res.json({
      success: "BooksDB Collections are created and data successfully inserted",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Something went wrong: data partialy inserted");
  }
});

module.exports = router;
