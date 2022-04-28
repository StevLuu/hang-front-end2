import React, { useState, useEffect } from 'react'
import './display.css'
import apiUrl from '../api-config'
import AlphaButtonComponent from './AlphaButtonComponent/alphaButtonComponent'
// import SingleWordComponent from './SingleWordComponent/singleWordComponent'
import CreateNewWordContainer from './CreateNewWordContainer/createNewWordContainer'


const DisplayComponent = () => {
    // const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // const [guessedLetters, addGuessedLetters] = useState("")
    const [words, setWord] = useState([])
    const getWords = async () => {
        console.log("Lets go get some words")
        console.log(`${apiUrl}/words`)
        // const getWordApiResponse = await fetch(await fetch(`${apiUrl}/words`))
        const getWordApiResponse = await fetch(`http://localhost:8000/api/words/`)
        //http://localhost:8000/api/words/
        const parsedWords = await getWordApiResponse.json()
        console.log(`words: ${JSON.stringify(parsedWords)}`)
        setWord(parsedWords)

    }

    // function letterSelect(letter) {
    //     addGuessedLetters(guessedLetters + letter)
    //     console.log(guessedLetters)
    // }
    return (
        <div className="global-pc">
            <h1>Not Hangman</h1>
            <CreateNewWordContainer></CreateNewWordContainer>
            {/* <button onClick={getWords}>Show Word Bank</button>
            {words.map((word)=>{
                return (
                    <SingleWordComponent
                    currWord = {word}
                    ></SingleWordComponent>
                )
            })} */}
            
        </div>
    )
}
export default DisplayComponent