import React,{useState,useEffect} from 'react';
import RakhiItems from './RakhiItems.js';
import './Rakhii.css';


function Rakhi(){

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('RakhiItems.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <h1 align="center" className="rakhi-header">Rakshabandhan Products</h1>
    <div className="row my-3">
     {
       data && data.length>0 && data.map((item)=>{
         return <RakhiItems item={item} />
       })
      //  data && data.length>0 && data.map((item)=><p>{item.email}</p>)
     }
    </div>
    </>
    
  );
}

export default Rakhi;