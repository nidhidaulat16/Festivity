import React, { useContext } from 'react'
import noteContext from "../context/noteContext"
import './Noteitem.css'

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, deleteFromHistory, history, getNotes } = context;
    const { note } = props;

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNote(note._id);
        getNotes();
        // deleteFromHistory(note.uid);
        // History.pull({title: note.title})
        // History.updateOne({title:note.title},{$pullAll:{title:[]}})

    }

    return (
        <>
            <div className="col-md-4 col-lg-4 col-xl-3 item-main container-fluid mt-3 mb-3">
                <div className="item my-3">
                    <div className="row-6 item-image-main">
                        <img className="item-image" src={note.image}/>
                    </div>
                    <div className="item-body">
                        <h5 className="item-title">{note.title}</h5>
                        <p className="item-text">Rs. {note.tag}</p>
                        {/* <img src={note.image}/> */}

                        <div className="text-center mt-1">
                            <button type="submit" className="btn btn-info dustbin mx-2 mb-1" onClick={handleDelete} >
                            Remove&ensp;<i className="fas fa-trash mx-2" onClick={handleDelete}></i>
                            </button>
                        </div>
                        {/* <i className="fas fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem
