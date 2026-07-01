import express from "express";
import notesRoutes from "../src/routes/notesRoutes";
// const express = require("express");

const app = express();

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/post", productRoutes);
// app.use("/api/payment", productRoutes);
// app.use("/api/email", productRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});

// what is endpoints?
// an endpoints is a combo of URL + HTTP method tht let client interact with a specific resource
