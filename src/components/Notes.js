import React, { useContext, useEffect } from 'react';
import noteContext from "../context/noteContext";
import Noteitem from './Noteitem';
import { useHistory } from 'react-router';

const Notes = () => {
    const context = useContext(noteContext);
    let history = useHistory();
    const { notes, getNotes } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            history.push("/login")
        }
    }, [])
    return (
        <>
            <div className="row my-3">
                {
                    notes.map((note) => {
                        return <Noteitem note={note} />;
                    })
                }
                
            </div>
        </>
    )
}

export default Notes
