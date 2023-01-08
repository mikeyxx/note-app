import React from "react";

interface Props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  wordCount: number;
  handleSave: () => void;
}

const AddNote = ({ note, setNote, wordCount, handleSave }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // So that wordcount remaining count stops at zero
    if (wordCount - event.target.value.length >= 0) {
      setNote(event.target.value);
    }
  };
  return (
    <div className="noteContainer new">
      <textarea
        value={note}
        onChange={handleChange}
        rows={8}
        cols={13}
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{wordCount - note.length} Remaining</small>
        <button onClick={handleSave} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
