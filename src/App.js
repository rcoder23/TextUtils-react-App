import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Abount from './components/Abount';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
     
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.getElementById("exa").style.backgroundColor="white";
      document.getElementById("exa").style.color="black";
      
      document.getElementById("stt").style.color="black";
      document.getElementById("stt2").style.color="black";
    }

  }
  return (
    
      <>
      <Router>
        <Navbar title="TextUtils" aboutText="aboutof Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Switch>
          <Route exact path="/about">
            <Abount></Abount>
          </Route>
          
          <Route exact path="/">
                <div className="container my-3">
                <TextForm heading="Enter text to anaylse " mode={mode} toggleMode={toggleMode}></TextForm>
                </div>
                {/* <Abount></Abount> */}
          </Route>
        </Switch>
        
        </Router> 
      </>
    );
}

export default App;
