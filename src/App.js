import React,{ useState } from 'react';
import './App.css';
import Modal from './Modal';
import FormList from './FormList';


function App() {
  const [data,setData]=useState({});
   const transportData=(values)=>{
    setData(values);
   }
  return (
    <div className="App">
      <Modal fnk={transportData}/>
      <FormList data={data} />
      
    </div>
  );
}

export default App;
