import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {

    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setAuthor(res.data.authors)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])

    const deleteMe = (deletedId) => {
        axios.delete("http://localhost:8000/api/authors/" + deletedId)
            .then(res => {
                console.log("OK DELETED", res.data)
                const filteredAuthor = author.filter((eachAuthor) => {
                    return deletedId !== eachAuthor._id;
                });
                setAuthor(filteredAuthor)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/authors/new"} >Add an author</Link>
            <p>We have quotes by:</p>
            {
                author.map((oneAuthor) => {
                    return (
                        <table key={oneAuthor._id}>
                            <tr>
                                <th>Author</th>
                                <th>Actions available</th>
                            </tr>
                            <tr>
                                <td>{oneAuthor.name}</td>
                                <td>
                                    <Link to={`/authors/${oneAuthor._id}/edit`} >Edit</Link>
                                    <button onClick={() => deleteMe(oneAuthor._id)}>Delete</button>
                                </td>
                            </tr>
                        </table>
                    )
                })
            }
        </div>
    )
}

export default Main