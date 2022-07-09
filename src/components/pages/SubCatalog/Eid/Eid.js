import React,{useState,useEffect} from 'react';
import EidItems from './EidItems.js';
import './Eidd.css';


function Eid(){

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('EidItems.json'
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
    <h1 align="center" className="eid-header">Eid Products</h1>
    <div className="row my-3">
     {
       data && data.length>0 && data.map((item)=>{
         return <EidItems item={item} />
       })
      //  data && data.length>0 && data.map((item)=><p>{item.email}</p>)
     }
    </div>
    </>
    
  );
}

export default Eid;