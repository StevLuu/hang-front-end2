import { useState } from 'react'
import './playword.css'
const PlayWordComp = (props) => {
    const [alphaBet, editAlphaBet] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
    const [correctLetters, updateCorrectLetters] = useState([])
    const [guessesRemaining, updateGuessesRemaining] = useState(props.currWord.numOfGuessesPossible)
    const arr = new Array(props.currWord.word.length).fill("[ ]");

    function letterSelect(letter) {
        // console.log(`guessesRemaining before: ${guessesRemaining}`)
        if (guessesRemaining > 0) {
            editAlphaBet(alphaBet.filter((a, index) => alphaBet[index] !== letter));
            //TODO only reduce guess of incorrect
            updateGuessesRemaining(guessesRemaining - 1)
            console.log(`guessesRemaining: ${guessesRemaining - 1}`)
        }
        else {
            console.log("outta guesses")
            props.togglePlayShowing()
            props.currWord.numOfPlays += 1
            props.updateWord(props.currWord.id)
        }
        if (props.currWord.word.toLowerCase().includes(letter.toLowerCase())) {
            console.log(`${letter} is in ${props.currWord.word}`)
            updateCorrectLetters([...correctLetters, letter.toLowerCase()])
            console.log(`correct letters: ${correctLetters}`)
        }
        else {
            console.log(`${letter} isnt in ${props.currWord.word}`)
        }
    }
    return (
        <div>
            <div id="display-block">
                {props.currWord.word.split("").map((letterBlock) => {
                    return (

                        <>
                            {correctLetters.includes(letterBlock.toLowerCase()) ?
                                <p>{letterBlock}</p>
                                :
                                <button> </button>
                            }

                        </>
                    )
                })}
            </div>
            <div id="keyboard">
                {alphaBet.map((alpha) => {
                    return (
                        // <AlphaButtonComponent 
                        // alpha = {alpha}
                        // letterSelect = {letterSelect} 
                        // ></AlphaButtonComponent>
                        <p>
                            <button onClick={() => {
                                letterSelect(alpha)
                            }}>{alpha}</button>
                        </p>
                    )
                })}
            </div>
                <div>Guesses Left: {guessesRemaining}</div>
        </div>
    )
}

export default PlayWordComp