import React, { useContext, useState } from "react";
import NotesContext from "../../store/notes-context";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";
const NoteItem = (props) => {
  const notesCtx = useContext(NotesContext);
  const [isHovering, setIsHovering] = useState(false);
  const deleteNoteHandler = () => {
    notesCtx.deleteNote(props.id);
  };
  return (
    <div
      className={classes.note__item}
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <Card>
        <h3>{props.title}</h3>
        <p>{props.note}</p>
        {isHovering && (
          <button onClick={deleteNoteHandler}>
            <i className="fas fa-trash"></i>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
        )}
      </Card>
    </div>
  );
};

export default NoteItem;
