import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import { NoteTemp } from "./components/template";
import { v4 as uuidv4 } from "uuid";
import SearchComp from "./components/SearchComp";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

const App = () => {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<NoteTemp[]>([]);
  const [search, setSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const wordCount = 200;

  // Date formatter function
  const dateFunc = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return [day, month, year].join("/");
  };

  const handleSave = () => {
    if (note.trim()) {
      setNotes([...notes, { id: uuidv4(), note, date: dateFunc() }]);
      setNote("");
    }
  };

  // Retrieve the local storage data
  let noteValue = localStorage.getItem("note");

  useEffect(() => {
    if (noteValue) {
      setNotes(JSON.parse(noteValue));
    }
  }, []);

  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className={`agbaContainer ${darkMode ? "dark-mode" : ""}`}>
      <section className="container">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <SearchComp setSearch={setSearch} />
        <div className="wrapper">
          <NoteList
            notes={notes.filter((note) =>
              note.note.toLowerCase().includes(search)
            )}
            handleDelete={handleDelete}
            wordCount={wordCount}
            setNotes={setNotes}
          />
          <AddNote
            note={note}
            setNote={setNote}
            wordCount={wordCount}
            handleSave={handleSave}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
