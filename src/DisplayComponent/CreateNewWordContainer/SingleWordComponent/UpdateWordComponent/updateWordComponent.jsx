const UpdateWordComponent = (props) => {
    return (
        <div>
            <h4>Update "{props.currWord.word}":</h4>
            <form onSubmit={(e) =>{e.preventDefault(); props.toggleEditShowing(); props.updateWord(props.currWord.id)}}>
                Word: <input onChange={props.handleUpdateWordInputChange} name="word" type="text" ></input>
                                                                                            {/*  value={props.currWord.word} */}
                <br></br>
                Allowed Attempts: <input onChange={props.handleUpdateWordInputChange} type="number" name="numOfGuessesPossible" id="" ></input>
                <br></br>
                <button type="submit">Update</button>
                <button onClick={()=>{props.deleteWord(props.currWord.id)}} >Delete</button>
            </form>
        </div>
    )
}
export default UpdateWordComponent