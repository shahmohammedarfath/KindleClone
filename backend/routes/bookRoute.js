import express from "express";
import multer from "multer";
import path from "path";
import Book from "../models/bookSchema.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create a new book
router.post("/create", async (req, res) => {
  const { image, title, author, description, price } = req.body;

  try {
    const newBook = new Book({
      image,
      title,
      author,
      description,
      price,
    });

    const savedBook = await newBook.save();
    console.log("Book saved successfully", savedBook);
    res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error saving book", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all books
router.get("/all", async (req, res) => {
  try {
    const books = await Book.find();
    console.log("Sending books:", books);
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a specific book by ID
router.get("/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
