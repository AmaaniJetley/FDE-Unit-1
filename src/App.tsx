import React, { useState } from 'react'
import FighterList from './components/FighterList';
import { Fighter, fighters } from "./data/fighters";

// src/App.tsx

const App = () => {
  const[bank, setBank] = useState<number>(100);
  const[agil, setAgil] = useState<number>(0);
  const[stren, setStren] = useState<number>(0);
  //const [myFighters, setMyFighters] = useState<Fighter[]>([]);
  //const[price, setPrice] = useState<number>(100);

  return (
  <div className = "page">
  <h1>Zombie Fighters</h1>
  <FighterList
      bank={bank}
      setBank={setBank}
      agil={agil}
      setAgil={setAgil}
      stren={stren}
      setStren={setStren}/>
  <h2>Money: {bank} Team Agility: {agil} Team Strength: {stren}</h2>
  </div>
  )
  //return ( <h1>Zombie Fighters</h1> )
  
};

export default App;