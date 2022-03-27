import React, { useState } from "react";
import "../style/note.css";
import noteService from "../API/noteService";

export const Note = ({ note, onDel }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    noteService.delete(note).then((data) => {
      onDel();
    });
  };
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editNote = () => {
    const newNote = {
      title,
      content,
      date: Date(),
      _id: note._id,
    };
    noteService.update(newNote).then((data) => {
      setIsEdit(false);
      onDel();
    });
  };

  return (
    <div className="note" id={note._id}>
      <div className="note-header">
        <div className="note-header-title">
          {isEdit ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="new title"
            ></input>
          ) : (
            <p>{note.title}</p>
          )}
        </div>
        <div className="note-content">
          {isEdit ? (
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="new content"
            ></input>
          ) : (
            <p>{note.content}</p>
          )}
        </div>
        <div className="buttons">
          {!isEdit ? (
            <button type="submit" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            <button type="submit" onClick={() => editNote()}>
              Save
            </button>
          )}
          <button type="submit" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
