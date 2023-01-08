import React, { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { NoteTemp } from "./template";

interface Props {
  note: NoteTemp;
  handleDelete: (id: string) => void;
  wordCount: number;
  setNotes: React.Dispatch<React.SetStateAction<NoteTemp[]>>;
  notes: NoteTemp[];
}

const Note = ({ note, handleDelete, wordCount, setNotes, notes }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(note.note);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // So that wordcount remaining count stops at zero
    if (wordCount - event.target.value.length >= 0) {
      setEditText(event.target.value);
    }
  };

  const handleSave = (id: string) => {
    setEdit(false);

    setNotes(
      notes.map((note) => (note.id === id ? { ...note, note: editText } : note))
    );
  };

  useEffect(() => {
    textRef.current?.focus();
  }, [edit]);
  return (
    <>
      {edit ? (
        <div className="noteContainer">
          <textarea
            ref={textRef}
            value={editText}
            onChange={handleChange}
          ></textarea>
          <div className="note-footer">
            <small>{wordCount - editText.length} Remaining</small>
            <button onClick={() => handleSave(note.id)} className="save">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="noteContainer hoverClass" onClick={() => setEdit(true)}>
          <span>{note.note}</span>
          <div className="note-footer">
            <small>{note.date}</small>
            <MdDeleteForever
              className="delete"
              onClick={() => handleDelete(note.id)}
            />
          </div>
          <span className="edit">Click to edit</span>
        </div>
      )}
    </>
  );
};

export default Note;
