import React,{ useState } from 'react';
import './App.css';
import Modal from './Modal';
import FormList from './FormList';
import FormComp from './FormComp';


function App() {
  const [data,setData]=useState({});
  const [array,setArray]=useState([])

   const transportData=(Increase)=>{
     for (let index = 0; index <=Increase; index++) {
      var details = JSON.parse(localStorage.getItem(Increase))
       setArray([...array,{details}])
     } 
   }

   const createdTime=()=>{
     let d= new Date();
     let day=d.getDate()
     let mounth=d.getMonth()
     let year=d.getFullYear()
     return(
     <p>{`${day}.${mounth}.${year}`}</p>
     )
   }  
  return (
    <div className="App">
      <Modal fnk={transportData} timefnk={createdTime} />
      <FormList data={array}/>
    </div>
  );
}

export default App;
