const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth"); // Ensure correct path

const app = express();
app.use(express.json()); // Allows JSON request parsing
app.use(cors()); // Enables CORS for frontend requests

// Define API routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/workershire", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
