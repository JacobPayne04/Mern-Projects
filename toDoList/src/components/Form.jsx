import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    const [newItem, setNewItem] = useState("")
    const [theCheck, setTheCheck] = useState(false)

    const CreateNewItem = (e) => {
        e.preventDefault();

        props.addItem({
            item: newItem,
            checked: theCheck
        })

        setNewItem("");
    }

    return (
        <form onSubmit={CreateNewItem}>
            <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            < br />
            Completed? <input type="checkbox" value={theCheck} onChange={(e) => setTheCheck(e.target.checked)} />
            < br />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form