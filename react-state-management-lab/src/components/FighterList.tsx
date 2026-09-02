import React, { useState } from 'react'
import { Fighter, fighters } from "../data/fighters";

function FighterList({bank, setBank, agil, setAgil, stren, setStren}) {
        const [myfighters, setMyFighters] = useState<Fighter[]>([]);
        //const[bank, setBank] = useState<number>(100);
        //const [fighter, setFighter] = useState<Fighter>();

        const addFighter = (newTeamMember: Fighter) => {
          if ((myfighters.some((fighter) => fighter.name === newTeamMember.name))
                || (bank < newTeamMember.price)) {
            return;
          }
          const updatedFighters = [...myfighters, newTeamMember];
          setMyFighters(updatedFighters);

          setBank(bank - newTeamMember.price);
          setAgil(updatedFighters.reduce((accumulator, newTeamMember) => {
              return accumulator + newTeamMember.agility
            }, 0));
          setStren(updatedFighters.reduce((accumulator, newTeamMember) => {
            return accumulator + newTeamMember.strength
          }, 0));

          };


        return (
        <div className="fighter-list">
        <ul className="fighters">
          {fighters.map((fighter) => (
            <li className="fighter" key={fighter.name}> {fighter.name}, Price: {fighter.price},
            Strength: {fighter.strength}, Agility: {fighter.agility}, <img src={fighter.img} />
            <button onClick={() => addFighter(fighter)}> Add </button>
            
            </li>
          ))}
        </ul>
        <div className="my-team"> 
        <h2>MY TEAM</h2>
        <ul>
          {myfighters.map((fighter) => (
            <li key={fighter.name}> {fighter.name}
            </li>
          ))}
        </ul>
        </div>

        </div>
        );
}

export default FighterList;