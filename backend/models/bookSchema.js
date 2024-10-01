import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amazonLink: {
    type: String,
  },
  pdf: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
