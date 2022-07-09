import React, { useState } from 'react'
import NoteContext from './noteContext'


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const historyInitial = [];
  const [history, setHistory] = useState(historyInitial);

  const amountInitial = "0";
  const [amount, setAmount] = useState(amountInitial);

  const infoInitial = [];
  const [infos, setInfo] = useState(infoInitial);

  const uidInitial = "0";
  const [uid, setUid] = useState(uidInitial);

  const productsInitial = []
  const [products, setProducts] = useState(productsInitial);

  const mihirInitial = "";
  const [mihir, setMihir] = useState(mihirInitial);

  const mihir1Initial = "";
  const [mihir1, setMihir1] = useState(mihir1Initial);

  const wishlistInitial = [];
  const [wishlist, setWishlist] = useState(wishlistInitial);

  const credentialsInitial = [];
  const [credentials, setCredentials] = useState(credentialsInitial);



  //Get all Notes
  const getNotes = async () => {
    //Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  //Get all Wishlist
  const getWishlist = async () => {
    //Api Call
    const response = await fetch(`${host}/api/wishlist/fetchallwishlist`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json);
    setWishlist(json);
  }

  //
  const gethistory = async () => {
    //api calls
    const response = await fetch(`http://localhost:5000/api/history/fetchallhistory`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const hist = await response.json();
    console.log(hist);
    setHistory(hist)
    // window.localStorage.setItem('history',JSON.stringify(json))
  };

  //Get all Products
  const getProducts = async () => {
    //Api Call
    const response = await fetch(`${host}/api/product/fetchallproducts`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json);
    setProducts(json);
  }

  //Get all Infos
  const getInfos = async () => {
    //Api Call
    const response = await fetch(`${host}/api/info/fetchallinfos`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json);
    setInfo(json);
  }

  //Add items to cart
  const addNote = async (title, description, tag, uid, image) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag, uid, image })
    })
    const note = await response.json();
    setNotes(notes.concat(note));
    setMihir(note);
  }

  //Add items to Wishlist
  const addToWishlist = async (title, description, tag, uid, image) => {
    //Api Call
    const response = await fetch(`${host}/api/wishlist/addwishlist`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag, uid, image })
    })
    const wishlistt = await response.json();
    setWishlist(wishlist.concat(wishlistt));
  }

  //Add items to account history
  const addToHistory = async (title, tag, image) => {
    //Api Call
    const url = `http://localhost:5000/api/history/addtohistory?title=${title}&tag=${tag}&image${image}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const historyy = await response.json();
    setHistory(history.concat(historyy));
  }

  //Add user-details to info
  const addInfo = async (name, address, phoneno) => {
    //Api Call
    const response = await fetch(`${host}/api/info/addtoinfo`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ name, address, phoneno })
    })
    const info = await response.json();
    setInfo(infos.concat(info));
  }

  //Delete item from account history
  const deleteFromHistory = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/history/deletefromhistory/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json)
    console.log("Deleting note with " + id)
    const newHistory = history.filter((note) => { return note._id !== id })
    setHistory(newHistory);
  }

  //Delete item from account history
  const deleteFromWishlist = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/wishlist/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json)
    console.log("Deleting note with " + id)
    const newwishlist = wishlist.filter((note) => { return note._id !== id })
    setWishlist(newwishlist);
  }

  //Delete a Note
  const deleteNote = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json)
    console.log("Deleting note with" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  //Delete a Note
  const deleteInfo = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/info/deleteinfo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json)
    console.log("Deleting info with" + id)
    const newInfos = infos.filter((info) => { return info._id !== id })
    setInfo(newInfos);
  }

  //Delete all Items from Cart
  const deleteCart = async (user) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/deletecart/${user}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json)
    console.log("Deleting note with" + user)
    const newCart = notes.filter((note) => { return note._id !== user })
    setNotes(newCart);
  }

  //Proceed to Buy
  // const proceedToBuy = () => {
  //   // for (let index = 0; index <= 5; index++) {
  //   //   const elements = notes[index];
  //   //   mihir = elements.tag;
  //   //   setAmount(elements.tag);

  //   const element = notes[0];
  //   const element1 = notes[1];
  //   const element2 = notes[2];
  //   const element3 = notes[3];
  //   const mihir = element.tag;
  //   const dada = parseInt(mihir);
  //   const mihir1 = element1.tag;
  //   const dada1 = parseInt(mihir1);
  //   const mihir2 = element2.tag;
  //   const dada2 = parseInt(mihir2);
  //   const mihir3 = element3.tag;
  //   const dada3 = parseInt(mihir3);
  //   const final = dada + dada1 + dada2 + dada3;
  //   setAmount(final);
  // }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = response.json();
    //Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  const addHistory = async (id, title, tag, image) => {
    //api call
    const response = await fetch(`http://localhost:5000/api/auth/successbuy/${id}/${title}/${tag}?image=${image}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
    const json = await response.json();
    console.log(json)
    // setpoojan(json);
    //   setcarts(newprofiles);
  };

  const addHistory2 = async (id) => {
    //api call
    const response = await fetch(`http://localhost:5000/api/auth/successbuy2/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
    const json = await response.json();
    console.log(json);
    //   setcarts(newprofiles);
  };

  const getAccountDetails = async () => {
    const url = "http://localhost:5000/api/auth/getuser";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json)
    setCredentials(json);
    // setMihir(json);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, addToHistory, deleteFromHistory, amount, addInfo, setUid, uid, products, getProducts, deleteCart, mihir, mihir1, setMihir1, history, addToWishlist, getWishlist, wishlist, addHistory, addHistory2, getAccountDetails, credentials, deleteFromWishlist, gethistory, getInfos, infos, deleteInfo}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;