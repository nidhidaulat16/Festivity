import React, { useContext, useState, useEffect } from 'react'
import noteContext from "../context/noteContext"
import { Link, useHistory } from 'react-router-dom'
import './UserDetails.css';
import axios from "axios";
import UserDetailsItem from './UserDetailsItem';

const UserDetails = (props) => {
    const context = useContext(noteContext);
    const { addInfo, notes, amount, infos, getInfos } = context;

    const [user, setUser] = useState({ name: "", address: "", phoneno: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addInfo(user.name, user.address, user.phoneno);
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    {/*Razor Pay*/ }
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
        getInfos();
    }, [])

    useEffect(() => {
        if (payment === true) {
            history.push("/");
            //   window.location.reload()
            props.showAlert("Your items would be delivered to you in 3 Working days", "success")
        }
    })

    const calculateTotal = () => {
        let total = 0;
        notes.map(item => {
            total += parseInt(item.tag, 10)
        });
        setTotal(total)
    }

    const handlebuynow = async (Total) => {
        const url = `http://localhost:5000/api/auth/orders/razorpay/${Total}`
        const res = await axios.get(url)
        console.log(res)
        // console.log(Total);

        const options = {
            "key": "rzp_test_aTqnRgP2lVSkAY", // Enter the Key ID generated from the Dashboard
            "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": res.data.currency,
            "name": "FESTIVITY",
            "description": res.data.notes,
            //"image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
            "handler": function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                setorderId(response.razorpay_order_id);
                setpaymenId(response.razorpay_payment_id);
                setsignature(response.razorpay_signature);
                setpayment(true);
            },
            // "prefill": {
            //     "name": "Gaurav Kumar",
            //     "email": "gaurav.kumar@example.com",
            //     "contact": "9999999999"
            // },
            // "notes": {
            //     "address": "Razorpay Corporate Office"
            // },
            // "theme": {
            //     "color": "#3399cc"
            // }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

    };

    const handleAddNewAddress = () =>{
        history.push("/address")
    }


    return (
        <>
        <h2 className="select-header">Select Your Address</h2>
        <div className="text-center payment-links mt-5">
                <Link className="back mr-5" aria-current="page" to="/proceedtobuy">
                    <i class="fas fa-chevron-circle-left fa-sm"></i>Back
                </Link>

                <button className="btn btn-primary razorpay" onClick={() => { handlebuynow(Total) }}>
                    Complete Your Payment&ensp;<i class="fas fa-wallet"></i>
                </button>
            </div>
            <div className="mt-4 row my-3">
                {
                    infos.map((note) => {
                        return <UserDetailsItem note={note} />;
                    })
                }

            </div>
            <div className="container">
            <button className="btn add-address" onClick={handleAddNewAddress}><i className="fas fa-plus fa-md"></i>&ensp;New Address</button>
            </div>

            {/* <h3 className="user-header">Fill-in the correct details for a flawless delivery service!</h3>
            <div className="text-center payment-links mt-3">
                <Link className="back mr-5" aria-current="page" to="/proceedtobuy">
                    <i class="fas fa-chevron-circle-left fa-sm"></i>Back
                </Link>

                <button className="btn btn-primary razorpay" onClick={() => { handlebuynow(Total) }}>
                    Purchase&ensp;<i class="fas fa-wallet"></i>
                </button>
            </div>

            <div className="text-center payment-links mt-3">

            </div>

            <div className="details-content container-fluid mt-4">
                <form onsubmit="return validateForm()">
                    <div className="mb-3">
                        <i class="fa fa-user-circle fa-md"></i>
                        <label htmlFor="exampleInputEmail1" className="form-label">&ensp;Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name" id="name" name="name" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <i class="fas fa-address-card"></i>
                        <label htmlFor="address" className="form-label">&ensp;Address</label>
                        <textarea className="form-control" placeholder="Enter your address" id="address" name="address" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <i class="fa fa-phone-alt"></i>
                        <label htmlFor="number" className="form-label">&ensp;Phone Number</label>
                        <input type="number" className="form-control" placeholder="+91" id="phoneno" name="phoneno" required onChange={onChange} />
                        <div class="error" id="numberErr"></div>
                    </div>

                    <button type="submit" value="submit" className="btn btn-primary submit-details mt-3" onClick={handleClick}>
                        Add Address
                    </button>

                </form>

            </div> */}
                <br /><br /><br /><br /><br />
        </>
    )
}

export default UserDetails