// NewWordComponent
const NewWordComponent = (props) => {
    return (
        <div>
            <h5>Create a new Word</h5>
            <form onSubmit={props.createNewWord}>
                Word: <input onChange={props.handleNewWordInputChange} name="word" type="text"></input>
                <br></br>
                {/* Allowed Attempts: <input onChange={props.handleNewWordInputChange} type="number" name="numOfGuessesPossibler" id=""></input> */}
                <br></br>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default NewWordComponent