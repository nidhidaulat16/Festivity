import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Cart from './components/Cart';
import Account from './components/Account';
import WishlistParent from './components/WishlistParent';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';
import NoteState from './context/NoteState';
import Diwali from './components/pages/SubCatalog/Diwali/Diwali';
import ProceedToBuy from './components/ProceedToBuy';
import UserDetails from './components/UserDetails';
import DiwaliProductParent from './components/pages/SubCatalog/Diwali/DiwaliProductParent';
import Eid from './components/pages/SubCatalog/Eid/Eid';
import EidProductParent from './components/pages/SubCatalog/Eid/EidProductParent';
import Christmas from './components/pages/SubCatalog/Christmas/Christmas';
import ChristmasProductParent from './components/pages/SubCatalog/Christmas/ChristmasProductParent';
import Navratri from './components/pages/SubCatalog/Navratri/Navratri';
import NavratriProductParent from './components/pages/SubCatalog/Navratri/NavratriProductParent';
import Ganpati from './components/pages/SubCatalog/Ganpati/Ganpati';
import GanpatiProductParent from './components/pages/SubCatalog/Ganpati/GanpatiProductParent';
import Rakhi from './components/pages/SubCatalog/Rakhi/Rakhi';
import RakhiProductParent from './components/pages/SubCatalog/Rakhi/RakhiProductParent';
import Address from './components/Address';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/'>
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path='/home'>
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/wishlist">
              <WishlistParent />
            </Route>
            <Route exact path="/proceedtobuy">
              <ProceedToBuy />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
            <Route exact path="/diwali">
              <Diwali showAlert={showAlert} />
            </Route>
            <Route exact path="/user-details">
              <UserDetails showAlert={showAlert}/>
            </Route>
            <Route exact path="/diwali-product">
              <DiwaliProductParent showAlert={showAlert}/>
            </Route>
            <Route exact path="/address">
              <Address />
            </Route>
            <Route exact path="/eid">
              <Eid showAlert={showAlert} />
            </Route>
            <Route exact path="/eid-product">
              <EidProductParent />
            </Route>
            <Route exact path="/christmas">
              <Christmas showAlert={showAlert} />
            </Route>
            <Route exact path="/christmas-product">
              <ChristmasProductParent />
            </Route>
            <Route exact path="/navratri">
              <Navratri showAlert={showAlert} />
            </Route>
            <Route exact path="/navratri-product">
              <NavratriProductParent />
            </Route>
            <Route exact path="/ganpati">
              <Ganpati showAlert={showAlert} />
            </Route>
            <Route exact path="/ganpati-product">
              <GanpatiProductParent />
            </Route>
            <Route exact path="/rakhi">
              <Rakhi showAlert={showAlert} />
            </Route>
            <Route exact path="/rakhi-product">
              <RakhiProductParent />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
