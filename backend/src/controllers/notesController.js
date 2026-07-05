// export const getAllNotes = (req, res) => {
//   res.status(201).json({ message: "Notes created successfully" });
// };
import Note from "../models/Note.js"

export async function getAllNotes (req, res) {
  // res.status(200).send( "Notes fetched succesfully!");

  try {
    const notes = await Note.find();
    
    res.status(200).json(notes);

  } catch (error) {
    console.error("Error in getAllNotes controller!", error);
    res.status(500).json({
      message:"Internal server error!"
    })
  }

};

export async function createNote (req, res) {
  // res.status(201).json({ message: "Notes created successfully!" });
  try {
    const {title,content} = req.body
    console.log(title,content);
  } catch (error) {
    
  }
};

export async function updateNote (req, res) {
  res.status(200).json({ message: "Notes updated successfully!" });
};

export async function deleteNode (req, res) {
  res.status(200).json({ message: "Notes deleted successfully!" });
};
