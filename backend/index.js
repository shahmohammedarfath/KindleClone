import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoute from "./routes/authRoute.js";
import bookRoute from "./routes/bookRoute.js";

import "./db.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// configure cors
const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/api/books", bookRoute);
app.use("/api/user", authRoute);

app.use('/uploads', express.static('uploads'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
