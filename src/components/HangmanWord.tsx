import React from 'react';
type HangmanWordProps={
    guestLetters:string[],
    wordToGuest:string
}
const HangmanWord = ({guestLetters,wordToGuest}:HangmanWordProps) => {
    return (
        <div style={{
            display:"flex",
            gap:".25em",
            fontSize:"6rem",
            fontWeight:"bold",
            textTransform:"uppercase",
            fontFamily:"monospace"
        }}>
            {wordToGuest.split("").map((e,i)=>{
                return <span key={i} style={{
                    borderBottom:".1em solid black"
                }}>
                    <span style={{
                        
                        visibility:guestLetters.includes(e)?"visible":"hidden"
                    }}>
                        {e}
                    </span>
                    
                    
                    </span>
            })}
        </div>
    );
};

export default HangmanWord;