import React from 'react'
import { Note } from './Note'

export const NoteList = ({notes, onDel}) => {
  return (
    <div className="list">
        {notes.map(note=>{
            return <Note key={note._id} note={note} onDel={onDel}/>
        })}
    </div>
  )
}
