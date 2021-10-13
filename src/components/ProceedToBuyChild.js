import React, { useContext } from 'react'
import noteContext from "../context/noteContext"
import './ProceedToBuyChild.css'

const ProceedToBuyChild = (props) => {
    const context = useContext(noteContext);
    const { amount } = context;
    const { note } = props;

    return (
        <>
        <div className="bill container-fluid mt-4 mb-1">
            <p className="bill-name">{note.title}</p>
            <div className="bill-body ">
                <p className="bill-amount ">Amount = Rs. {note.tag}</p>
            </div>
        </div>
        </>
    )
}

export default ProceedToBuyChild
