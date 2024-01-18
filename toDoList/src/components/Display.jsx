import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>

            <div style={{textDecoration: props.eachItem.checked ? "line-through" : ""}}>
                <p>
                    {props.eachItem.item}
                    {props.eachItem.checked}
                    <input type="checkbox" 
                    checked={props.eachItem.checked}
                    onChange={() => props.changeStatus(props.index)}
                    />
                    <button onClick={() => props.deleteItem(props.index)}>Delete</button>
                </p>
            </div>
        </fieldset>
    )
}

export default Display