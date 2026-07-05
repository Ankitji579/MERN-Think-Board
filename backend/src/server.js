import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
// const express = require("express");

import {connectDB} from "./config/db.js"
import dotenv from "dotenv"

// import {Router} from "express"

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

app.use(express.json()); //middleware

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/post", productRoutes);
// app.use("/api/payment", productRoutes);
// app.use("/api/email", productRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: 5001" , PORT);
});

// what is endpoints?
// an endpoints is a combo of URL + HTTP method tht let client interact with a specific resource


// mongodb+srv://dryisholeup_db_user:1beLDfXb5T44MUjy@cluster0.zlbg742.mongodb.net/?appName=Cluster0

