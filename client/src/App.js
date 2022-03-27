import { useEffect, useState } from "react";
import { NoteList } from "./Components/NoteList";
import noteService from "./API/noteService";
import AddNoteForm from "./Components/AddNoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  const getAll = async() => {
    const notes = await noteService.getAll();
    setNotes(notes);
  }

  useEffect(() => {
    getAll();
  }, [])

  return (
    <div className="App">
      <AddNoteForm onAdd={getAll}/>
      <NoteList notes={notes} onDel={getAll}/>
    </div>
  );
}

export default App;
