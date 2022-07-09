import React,{useState,useEffect} from 'react'
import { Link, useLocation, useHistory} from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push('/login');
    }

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    },[location])

    return (

        <nav className="navbar navbar-expand-lg navbar-head">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
                    <i class="fas fa-gift"></i>&ensp;Festivity 
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/cart"?"active":""}`} to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/account"?"active":""}`} to="/account">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/wishlist"?"active":""}`} to="/wishlist">Wishlist</Link>
                        </li>
                    
                        <li className="nav-item">
                           <Link 
                              to='/login' 
                              className='nav-links-mobile' 
                              onClick={closeMobileMenu}>
                              Login
                           </Link> 
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                    <Link className="btn btn-primary mx-1 login" to="/login" role="button">Login</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-primary logout"> Logout </button>}
                </div>
            
        </nav>
    )
}

export default Navbar
