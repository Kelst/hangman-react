import React from 'react';

import  styles from "./Keyboard.module.css";
 type KeyboardProps={
    activeLetter: string[],
    inActiveLetter:string[],
    addGuessedLetter:(key:string)=>void,
    disabled?:boolean
}
const Keyboard = ({disabled=false,activeLetter,inActiveLetter,addGuessedLetter}:KeyboardProps) => {
    const KEYS = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]
     
    return (
        <div style={{
            display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))",
            gap:".5rem",
        }}>
            {KEYS.map((key)=>{
                const isActive=activeLetter.includes(key)
                const isInActive=inActiveLetter.includes(key)

           return <button disabled={isInActive||isActive||disabled} onClick={()=>{addGuessedLetter(key)}} 
             className={`${styles.btn} ${ isActive? styles.active:""}
             ${ isInActive? styles.inactive:""}
             `}>
                {key}
             </button>})}
        </div>
    );
};

export default Keyboard;