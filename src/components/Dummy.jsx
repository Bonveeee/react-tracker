// import AddNote from "./components/AddNote";
// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Notes from "./components/Notes";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   const [showAddNote, setShowAddNote] = useState(false);
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const getNotes = async () => {
//       const notesFromServer = await fetchNote();
//       setNotes(notesFromServer);
//     };
//     getNotes();
//   }, []);

//   //fetch notes
//   const fetchNote = async () => {
//     const res = await fetch("http://localhost:5000/notes");
//     const data = await res.json();

//     return data;
//   };

//   //delete Note
//   const deleteNote = async (id) => {
//     await fetch(`http://localhost:5000/notes/${id}`, {
//       method: "DELETE",
//     });

//     setNotes(notes.filter((note) => note.id !== id));
//   };

//   //toggle reminder
//   const toggleReminder = async (id) => {
//     const noteToToggle = await fetchNote(id);
//     const updateNote = { ...noteToToggle, reminder: !noteToToggle.reminder };

//     const res = await fetch(`http://localhost:5000/notes/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updateNote),
//     });
//     const data = await res.json();

//     setNotes(
//       notes.map((note) =>
//         note.id === id ? { ...note, reminder: !data.reminder } : note
//       )
//     );
//   };

//   //add Note
//   const addNote = async (note) => {
//     const res = await fetch("http://localhost:5000/notes", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(note),
//     });

//     //new data is added
//     const data = await res.json();
//     setNotes([...notes, data]);
//   };

//   return (
//     <Router>
//       <div className="container">
//         <Header
//           title="Note Tracker"
//           onAdd={() => setShowAddNote(!showAddNote)}
//           showAdd={showAddNote}
//         />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 {showAddNote && <AddNote onAdd={(note) => addNote(note)}/>}
//                 {notes.length > 0 ? (
//                   <Notes
//                     notes={notes}
//                     onDelete={deleteNote}
//                     onToggle={toggleReminder}
//                   />
//                 ) : (
//                   "No Notes To Show"
//                 )}
//               </>
//             }
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
