import React, { useState, useEffect } from 'react';
import DiwaliItems from './DiwaliItems.js';
import './Diwalii.css';


function Diwali(props) {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('DiwaliItems.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <h1 align="center" className="diwali-header">Diwali Products</h1>
      <div className="row my-3">
        {
          data && data.length > 0 && data.map((item) => {
            return <DiwaliItems item={item} />
          })
          //  data && data.length>0 && data.map((item)=><p>{item.email}</p>)
        }
      </div>
    </>

  );
}

export default Diwali;