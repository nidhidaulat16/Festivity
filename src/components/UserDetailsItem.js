import React, { useContext, useEffect } from 'react'
import noteContext from "../context/noteContext"
import './UserDetails.css'

const UserDetailsItem = (props) => {

    const context = useContext(noteContext);
    const { deleteInfo, getInfos } = context;

    const { note } = props;

    useEffect(() => {
        getInfos();
    }, [])

    const handleDelete = (e) => {
        e.preventDefault();
        deleteInfo(note._id);
        // deleteNote(note._id);
        // getNotes();
    }

    return (
        <div className="user-details container">
            <div className="details my-2">
                <div className="user-details-body">
                    <h5 className="user-details-title">{note.name}</h5>
                    <h6 className="user-details-subtitle"><i className="fa fa-phone"></i>&ensp;{note.phoneno}</h6>
                    <p className="user-details-text"><i class="fa fa-address-card fa-md"></i>&ensp;{note.address}</p>
                    <p className="trash">Remove&ensp;<i className="fas fa-trash fa-sm" onClick={handleDelete}></i></p>

                    <div class="form-check">
                        <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-lb mt-2" for="flexRadioDefault1">
                            Set Default
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserDetailsItem
