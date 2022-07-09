import React, { useContext, useState, useEffect } from 'react'
import noteContext from "../context/noteContext"
import { useHistory } from 'react-router';
import './UserDetails.css'
const Address = () => {

    const context = useContext(noteContext);
    const { addInfo, notes, amount, infos, getInfos } = context;
    let historyy = useHistory();

    const [user, setUser] = useState({ name: "", address: "", phoneno: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addInfo(user.name, user.address, user.phoneno);
        //historyy.push("/account")

    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
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

            </div>
        </div>
    )
}

export default Address
