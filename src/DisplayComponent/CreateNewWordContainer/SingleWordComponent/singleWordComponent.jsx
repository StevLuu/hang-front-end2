// NewWordComponent
import { useState } from 'react'
import UpdateWordComponent from "./UpdateWordComponent/updateWordComponent"
import './singleWord.css'
import PlayWordComp from './PlayWordComp/playWordComp'
const SingleWordComponent = (props) => {
    const [playShowing, playSetShowing] = useState(false)
    const togglePlayShowing = () => { playSetShowing(!playShowing) }
    const [editShowing, editSetShowing] = useState(false)
    const toggleEditShowing = () => { editSetShowing(!editShowing) }
    return (
        <div id="indie-card">
            {/* <h4>{props.currWord.word}</h4> */}
            <p>numOfCorrectPlays: {props.currWord.numOfCorrectPlays}</p>
            <p>numOfGuessesPossible: {props.currWord.numOfGuessesPossible}</p>
            <p>numOfPlays: {props.currWord.numOfPlays}</p>
            {/* <p>id: {props.currWord.id}</p> */}

            <>
                {editShowing ?
                    <div id="indie-edit-card">
                        <UpdateWordComponent
                            handleUpdateWordInputChange={props.handleUpdateWordInputChange}
                            updateWord={props.updateWord}
                            currWord={props.currWord}
                            deleteWord={props.deleteWord}
                            toggleEditShowing={toggleEditShowing}
                        ></UpdateWordComponent>
                        <button onClick={toggleEditShowing}>Close</button>
                    </div>
                    :
                    <button onClick={toggleEditShowing}>Edit</button>
                }
            </>

            <>
                {playShowing ?
                    <div>
                        <button onClick={togglePlayShowing}>x</button>
                        <PlayWordComp
                        currWord = {props.currWord}
                        updateWord = {props.updateWord}
                        togglePlayShowing = {togglePlayShowing}
                        ></PlayWordComp>
                    </div>
            :
            <button onClick={togglePlayShowing}>Play</button>
            }
            </>
        </div>
    )
}
export default SingleWordComponent