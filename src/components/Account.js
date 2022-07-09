import React, { useContext, useEffect } from 'react'
import noteContext from "../context/noteContext"
import './Account.css'
import Footer from './Footer.js'
import { useHistory } from 'react-router';
import UserDetailsItem from './UserDetailsItem';
import Address from './Address';

const Account = () => {

    const context = useContext(noteContext);
    const { getAccountDetails, credentials, history, gethistory, infos, getInfos } = context;
    console.log(history);
    let historyy = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAccountDetails();
        }
        else {
            historyy.push("/login")
        }
    }, [])

    useEffect(() => {
        gethistory();
    }, [])

    useEffect(() => {
        getInfos();
    }, [])

    const handleClick = ()=>{
        historyy.push("/address")
    }

    return (
        <>
            <h1 className="account-header">My Account</h1>
            <div className="account-main mt-5 container-fluid">
                <div className="user-circle pt-3">
                    <i className="fas fa-user-circle fa-5x userpic"></i>
                </div>

                <div className="account-details pt-2">
                    <p className="user-name pb-1">{credentials.name}</p>
                    <p className="user-email">Email: {credentials.email}</p>
                </div>
            </div>

            <br></br> <br></br>
            <h2 className="account-header">Your Address</h2>
            <div className="row my-3 mb-3">
                {
                    infos.map((note) => {
                        return <UserDetailsItem note={note} />;
                    })
                }

            </div>
            <div className="container">
            <button type="button" class="btn add-address" onClick={handleClick}><i className="fas fa-plus fa-md"></i>&ensp;New Address</button>
            </div>
            <br /><br /><br />

            <h2 className="history-header mt-3">History</h2>
            <p className="history-tag"> Here are your recently purchased items!</p>

            <br></br> <br></br>

            {
                history.map((item) => {
                    return <div>


                        <div className="history-container container my-4">
                            <div className="history-title">
                                {item.title}
                            </div>

                            <div className="history-price">
                                {item.tag}
                            </div>
                        </div>
                    </div>
                })
            }

            <Footer />
        </>
    )

}

export default Account
