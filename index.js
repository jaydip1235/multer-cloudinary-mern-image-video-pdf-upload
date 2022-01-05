const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require('express-fileupload'); 

dotenv.config();

// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());
// app.use(fileupload({useTempFiles: true}))

// Route
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server is running"));
