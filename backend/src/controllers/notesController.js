// export const getAllNotes = (req, res) => {
//   res.status(201).json({ message: "Notes created successfully" });
// };

export function getAllNotes (req, res) {
  res.status(200).send( "Notes fetched succesfully!");
};

export function createNote (req, res) {
  res.status(201).json({ message: "Notes created successfully!" });
};

export function updateNote (req, res) {
  res.status(200).json({ message: "Notes updated successfully!" });
};

export function deleteNode (req, res) {
  res.status(200).json({ message: "Notes deleted successfully!" });
};
