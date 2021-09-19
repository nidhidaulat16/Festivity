import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Cart from './components/Cart';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';

import Diwali from './components/pages/SubCatalog/Diwali/Diwali';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path ='/'>
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path ='/home'>
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/account">
            <Account/>
          </Route>
          <Route exact path="/wishlist">
            <Wishlist/>
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
          <Route exact path="/diwali">
            <Diwali showAlert={showAlert}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
