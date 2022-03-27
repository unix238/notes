import React, { useState } from "react";
import noteService from "../API/noteService";

export default function AddNoteForm({onAdd}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        const note = {
            title,
            content,
            date: Date()
        };
        noteService.create(note).then((data) => {onAdd()});
    }

  return (
    <form className="note" onSubmit={handleForm}>
      <div className="note-header">
        <div className="note-header-title">
          <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
      </div>
      <div className="note-content">
        <input type="text" placeholder="Content" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
      </div>
      <div className="buttons">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
