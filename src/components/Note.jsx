import React, { useState, useEffect, useRef } from "react";

const Note = ({index, notes, Task, NotesOpened, setNotesOpened, saveTasks}) => {

    const [NewNote, setNewNote] = useState(notes);
    const notesTextRef = useRef(null);

    const writeNote = (e) => {
        let note = e.target.value;
        setNewNote(note);
    }

    const handleNotesOpen = () => {
        saveTasks("notes", NewNote);
        setNotesOpened(false);
    }

    useEffect(() => {
        setTimeout(() => {
            if(notesTextRef.current) {
                notesTextRef.current.focus();
                notesTextRef.current.select();
            }
        })
    },[NotesOpened])

    return (
        <>
            <div className="notes-modal">
                <h2>Note for {Task}</h2>
                <textarea  
                    id={`note-textarea-${index}`}
                    className="note-textarea" 
                    ref={notesTextRef}
                    value={NewNote} 
                    onChange={writeNote}
                ></textarea>
                <button 
                    className="btn-notes"
                    onClick={handleNotesOpen}
                >Close</button>
            </div>
        </>
    )
}

export default Note;