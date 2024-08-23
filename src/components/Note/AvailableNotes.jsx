import React, { useContext } from "react";
import NotesContext from "../../store/notes-context";
import classes from "./AvailableNotes.module.css";
import NoteItem from "./NoteItem";
const AvailableNotes = () => {
  const notesCtx = useContext(NotesContext);
  const fallbackHtml = (
    <section className={classes.notes__section}>
      <div className={classes.image}></div>
      <p>Notes you add appear here</p>
    </section>
  );
  return (
    <>
      {notesCtx.notes.length === 0 && fallbackHtml}
      <section className={classes.notes}>
        {notesCtx.notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              note={note.note}
            />
          );
        })}
      </section>
    </>
  );
};

export default AvailableNotes;