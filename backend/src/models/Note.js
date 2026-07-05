import mongoose from "mongoose";

// 1- create a schema
// 2- model based of that schema

export const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt with hr:min:sec also
  },
);

const Note = mongoose.model("Note",noteSchema)

// note.createdAt.toLocaleString();

export default Note