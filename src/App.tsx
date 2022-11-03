import { useState ,useEffect, useCallback} from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from "./wordList.json"
function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })
const [guessedLetters,setGuessedLetters]=useState<string[]>([])
const incorectLetters=guessedLetters.filter(
  letter=>!wordToGuess.includes(letter)
)

const addGuestLetter=useCallback((key:string)=>{
  if(guessedLetters.includes(key)) return
  setGuessedLetters(currentLetters=>[...currentLetters,key])  
},[guessedLetters])

useEffect(()=>{
const handler=(e:KeyboardEvent)=>{
  const key=e.key
  if(!key.match(/^[a-z]$/)) return
  e.preventDefault();
  addGuestLetter(key)

}
document.addEventListener("keypress",handler)

return ()=>{
  document.removeEventListener("keypress",handler)
}
},[guessedLetters])
const isLoser=incorectLetters.length>=6
const isWinner=wordToGuess.split("").every(letter=>guessedLetters.includes(letter))
  return (
    <div style={{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center"
    }}>
     <div style={{
      fontSize:"2rem",
      textAlign:"center"
     }}>
     {isWinner&& "Winner! - Refresh to try again"}
     {isLoser&& "Nice try! - Refresh to try again"}
     </div>
     <HangmanDrawing numberOfGuesses={incorectLetters.length}/>
     <HangmanWord guestLetters={guessedLetters} wordToGuest={wordToGuess}/>
     <div style={{
      alignSelf:"stretch"
     }}>
     <Keyboard 
     disabled={isLoser||isWinner}
     activeLetter={guessedLetters.filter(letter=>(wordToGuess.includes(letter)))}
     inActiveLetter={incorectLetters}
     addGuessedLetter={addGuestLetter}
     />
     </div>
     

    </div>
  )
}

export default App
