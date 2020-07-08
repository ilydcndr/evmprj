import React from 'react';
import './App.css';
import AnaSayfa from './AnaSayfa';
import {Button} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Button >Form Oluştur</Button>
      <AnaSayfa></AnaSayfa>
    </div>
  );
}

export default App;
