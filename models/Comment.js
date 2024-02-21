const mongoose =require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: 
    {type:mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }, 
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }, 
    content: {
      type: String,
      required: true
    },
  createdAt: {
    type:Date,
    immutable:true,
    default: () => Date.now()
  },
  updatedAt:{
    type:Date,
    default: () => Date.now()
  }
});
  const Comment = mongoose.model('Comment', commentSchema );
  module.exports = Comment;