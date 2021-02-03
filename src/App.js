import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [rojo, setrojo] = useState("Off");
  const [amarillo, setamarillo] = useState("Off");
  const [verde, setverde] = useState("Off");

  const rojoOn = () => {
    setrojo("OnRed");
    setamarillo("Off");
    setverde("Off");
  }
  const amarilloOn = () => {
    setamarillo("OnYellow");
    setrojo("Off");
    setverde("Off");
  }
  const verdeOn = () => {
  setverde("OnGreen");
  setamarillo("Off");
  setrojo("Off");
  }  

  
  return (
    
    <div>
      <Header/>
      <div className="semaforo">
        <div className={rojo + " rojo"} onClick={rojoOn}></div>
        <div className={amarillo + " amarillo"} onClick={amarilloOn}></div>
        <div className={verde + " verde"} onClick={verdeOn}></div>
      </div>
    </div>
  );


}
export default App;