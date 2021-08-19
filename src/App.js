import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

let a="rohit";
function App() {

  const [mode , setmode ] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      document.getElementById("exa").style.backgroundColor="black";
      document.getElementById("exa").style.color="white";
      document.getElementById("stt").style.color="white";
      document.getElementById("stt2").style.color="white";
      // document.getElementsByClassName("stt").style.color="red";
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.getElementById("exa").style.backgroundColor="white";
      document.getElementById("exa").style.color="black";
      // document.getElementById("stt").style.backgroundColor="red";
      document.getElementById("stt").style.color="black";
      document.getElementById("stt2").style.color="black";
    }

  }
  return (
    
      <>
        
        <Navbar title="TextUtils" aboutText="aboutof Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <div className="container my-3">

       
        <TextForm heading="Enter text to anaylse " mode={mode} toggleMode={toggleMode}></TextForm>
        
        </div>
        
      </>
    );
}

export default App;
