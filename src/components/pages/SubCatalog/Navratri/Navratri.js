import React,{useState,useEffect} from 'react';
import NavratriItems from './NavratriItems.js';
import './Navratrii.css';


function Navratri(){

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('NavratriItems.json'
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
    <h1 align="center" className="navratri-header">Navratri Products</h1>
    <div className="row my-3">
     {
       data && data.length>0 && data.map((item)=>{
         return <NavratriItems item={item} />
       })
      //  data && data.length>0 && data.map((item)=><p>{item.email}</p>)
     }
    </div>
    </>
    
  );
}

export default Navratri;