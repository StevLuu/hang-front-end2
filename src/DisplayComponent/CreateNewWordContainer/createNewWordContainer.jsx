import React from 'react'
import apiUrl from '../../api-config'
import SingleWordComponent from './SingleWordComponent/singleWordComponent'
import NewWordComponent from './NewWordComponent/newWordComponent'

class CreateNewWordContainer extends React.Component {
    constructor(props) {
        super()
        this.state = {
            words: [],
            newWord: {
                word: "",
                numOfCorrectPlays: 0,
                numOfGuessesPossible: 5,
                numOfPlays: 0
            },
            updateWord: {
                word: "",
                numOfCorrectPlays: 0,
                numOfGuessesPossible: 5,
                numOfPlays: 0
            }
        }
    }
    handleNewWordInputChange = (e) => {
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            newWord: {
                ...this.state.newWord,
                [e.target.name]: e.target.value
            }
        })
    }

    toggleFunc = (flag) =>{
        return !flag
    }

    createNewWord = async (e) => {
        e.preventDefault()
        const apiResponse = await fetch(`${apiUrl}/api/words/`, {
            method: "POST",
            body: JSON.stringify(this.state.newWord),
            headers: {
                'Content-Type': "application/json"
            }

        })
        if (apiResponse.status === 201) {
            const creationResponseParsed = await apiResponse.json()
            console.log(`creationResponseParsed: ${JSON.stringify(creationResponseParsed)}`)
            this.setState({
                words: [...this.state.words, creationResponseParsed]
            })
        }
        //TODO: else
    }
    // console.log("container is constructing")
    async getWords() {
        console.log("Lets go get some words")
        console.log(`${apiUrl}/words`)
        // const getWordApiResponse = await fetch(await fetch(`${apiUrl}/words`))
        const getWordApiResponse = await fetch(`${apiUrl}/api/words/`)
        //http://localhost:8000/api/words/
        const parsedWords = await getWordApiResponse.json()
        console.log(`words: ${JSON.stringify(parsedWords)}`)
        this.setState({
            words: parsedWords
        })
    }
    deleteWord = async (idToDelete) => {
        const deleteResponse = await fetch(`${apiUrl}/api/words/${idToDelete}/`, {
            method: "DELETE"
        })
        console.log(`delete status: ${(deleteResponse.status)}`)
        if (deleteResponse.status === 204) {
            this.setState({
                words: this.state.words.filter(w => w.id !== idToDelete)
            })
        }
    }

    handleUpdateWordInputChange = (e) => {
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            updateWord: {
                ...this.state.updateWord,
                [e.target.name]: e.target.value
            }
        })
    }


    updateWord = async (idToUpdate) => {
        const apiResponse = await fetch(`${apiUrl}/api/words/${idToUpdate}/`, {
            method: "PUT",
            body: JSON.stringify(this.state.updateWord),
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(`update status: ${apiResponse.status}`)
        if(apiResponse.status === 200){
            const parsedResponse = await apiResponse.json()
            this.setState({
                words: this.state.words.map(w => w.id === idToUpdate ? parsedResponse: w)
            })
        }
    }

    componentDidMount() {
        this.getWords()
        console.log("doing API call now that render")
    }
    render() {
        // console.log("container is rendering")
        return (
            <div>
                <NewWordComponent
                    createNewWord={this.createNewWord}
                    handleNewWordInputChange={this.handleNewWordInputChange}
                ></NewWordComponent>

                {/* <button onClick={toggleWordBank}>Show Word Bank</button> */}
                <>
                {this.state.words.map((word) => {
                    return (
                        <SingleWordComponent
                            handleUpdateWordInputChange={this.handleUpdateWordInputChange}
                            updateWord={this.updateWord}
                            deleteWord={this.deleteWord}
                            currWord={word}
                        // key = {`word-{word.id}`}
                        ></SingleWordComponent>
                    )
                })}
                </>
            </div>
        )

    }
}
export default CreateNewWordContainer;