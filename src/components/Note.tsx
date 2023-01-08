import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { NoteTemp } from "./template";

interface Props {
  notes: NoteTemp[];
  handleDelete: (id: string) => void;
}

const Note = ({ notes, handleDelete }: Props) => {
  return (
    <>
      {notes.map((note) => (
        <div key={note.id} className="noteContainer hoverClass">
          <span>{note.note}</span>
          <div className="note-footer">
            <small>{note.date}</small>
            <MdDeleteForever
              className="delete"
              onClick={() => handleDelete(note.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Note;
