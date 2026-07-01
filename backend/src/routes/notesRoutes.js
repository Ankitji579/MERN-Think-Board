import express, { Router } from "express";
import {
  createNote,
  deleteNode,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/nth", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNode);

export default router;

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("You have 50 notes currently.");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json("Notes updated successfully.");
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json("Notes updated successfully");
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json("Notes delted succesfully");
// });
