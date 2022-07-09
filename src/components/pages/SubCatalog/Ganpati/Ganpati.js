import React,{useState,useEffect} from 'react';
import GanpatiItems from './GanpatiItems.js';
import './Ganpatii.css';


function Ganpati(){

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('GanpatiItems.json'
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
    <h1 align="center" className="ganpati-header">Ganesh Chaturthi Products</h1>
    <div className="row my-3">
     {
       data && data.length>0 && data.map((item)=>{
         return <GanpatiItems item={item} />
       })
      //  data && data.length>0 && data.map((item)=><p>{item.email}</p>)
     }
    </div>
    </>
    
  );
}

export default Ganpati;