// server.js

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3001; // Choose any available port
mongoose.connect(
  "mongodb+srv://missing:ObqFlmO7u2xLPUha@cluster0.knk0vy7.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const formDataSchema = new mongoose.Schema({
  itemName: String,
  category: String,
  itemType: String,
  city: String,
  time: String,
});

const FormDataModel = mongoose.model("FormData", formDataSchema);

app.post("/submitForm", async (req, res) => {
  try {
    const formData = req.body;

    // Create a new document using the FormDataModel
    const newFormData = new FormDataModel(formData);

    // Save the document to the MongoDB database
    await newFormData.save();

    res.send("Form data submitted to MongoDB successfully!");
  } catch (error) {
    console.error("Error submitting form data to MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/getFormData", async (req, res) => {
  try {
    // Retrieve data from MongoDB using the FormDataModel
    const formData = await FormDataModel.find();

    res.json(formData);
  } catch (error) {
    console.error("Error retrieving form data from MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
