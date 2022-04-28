import React, { useState } from 'react'

const AlphaButtonComponent = (props) => {
    return (
        <p>
            <button onClick={props.letterSelect(props.alpha)}>{props.alpha}</button>
        </p>
    )
}
export default AlphaButtonComponent