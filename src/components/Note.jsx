import React, { useState, useEffect } from "react";

const Note = ({notes, Task, setNotesOpened, saveTasks}) => {

    const [NewNote, setNewNote] = useState(notes);

    const writeNote = (e) => {
        let note = e.target.value;
        setNewNote(note);
    }

    const handleNotesOpen = () => {
        saveTasks("notes", NewNote);
        setNotesOpened(false);
    }

    return (
        <>
            <div className="notes-modal">
                <h2>Note for {Task}</h2>
                <textarea className="note-textarea" value={NewNote} onChange={writeNote}></textarea>
                <button className="btn-notes" onClick={handleNotesOpen}>Close</button>
            </div>
        </>
    )
}

export default Note;