import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import noteContext from "../context/noteContext";
import ProceedToBuyChild from './ProceedToBuyChild';
import './ProceedToBuy.css'
import axios from "axios";

const ProceedToBuy = () => {
    const context = useContext(noteContext);
    const { notes, amount } = context;
    const [Total, setTotal] = useState(0);
    let history = useHistory();

    const [payment, setpayment] = useState(false)
    const [orderId, setorderId] = useState('')
    const [paymenId, setpaymenId] = useState('')
    const [signature, setsignature] = useState('')

    useEffect(() => {
        calculateTotal();
    }, [])

    useEffect(() => {
        if (payment===true) {
          history.push("/");
          window.location.reload()
        }
    }, )

    const calculateTotal = () => {
        let total = 0;
        notes.map(item => {
            total += parseInt(item.tag, 10)
        });
        setTotal(total)
    }


    return (
        <>
            <h1 className="bill-header">Here's the list of items in your bag!</h1>
            <div className="text-center bill-links mt-3">
                <Link className="back" aria-current="page" to="/cart"><i class="fas fa-chevron-circle-left fa-sm"></i>Back</Link>
                &ensp;&ensp;&ensp;&ensp;&ensp;
                <Link className="next" aria-current="page" to="/user-details">Next<i class="fas fa-chevron-circle-right fa-sm"></i></Link>
            </div>
            <div className="row my-3 container-fluid">

                {
                    notes.map((note) => {
                        return <ProceedToBuyChild note={note} />;
                    })
                }
            </div>
            <div className="totalamt text-center">
                <h5 className="totalamt">The Total Amount Payable by you is Rs. {Total} </h5>
            </div>
        </>
    )
}

export default ProceedToBuy
