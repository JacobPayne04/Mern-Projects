import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'

const Create = (props) => {
    
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const submitAuthor = (e) => {
        e.preventDefault();

        const tempObjectToSendToDB = {
            name
        };

        // SUBMITING THE PRODUCTS
        axios.post("http://localhost:8000/api/authors", tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                navigate("/authors")
            })
            .catch(err => {
                console.log("❌❌❌❌", err)
                const errorResponse = err.response.data.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            }
            )

    }

    return (
        <div >
            <h1>Favorite authors</h1>
            <Link to={"/authors"} >Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={submitAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>Name:</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <div>
                    <Link to={"/authors"} >Cancel</Link>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create