import React from "react";
import Note from "./Note";
import { NoteTemp } from "./template";

interface Props {
  notes: NoteTemp[];
  handleDelete: (id: string) => void;
  wordCount: number;
  setNotes: React.Dispatch<React.SetStateAction<NoteTemp[]>>;
}

const NoteList = ({ notes, handleDelete, wordCount, setNotes }: Props) => {
  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleDelete={handleDelete}
          wordCount={wordCount}
          setNotes={setNotes}
          notes={notes}
        />
      ))}
    </>
  );
};

export default NoteList;
