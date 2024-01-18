import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = (props) => {

  const [name, setName] = useState("")
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()

  // SHOW DATA FROM AUTHOR
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id)
      .then(res => {
        console.log("✅✅✅✅", res.data)

        setName(res.data.author.name)
      })
      .catch(err => console.log(err))

  }, [id])

  // SUBMITTING THE EDITTED AUTHOR DATA
  const submitAuthor = (e) => {
    e.preventDefault();

    const tempObjectToSendToDB = {
      name
    };

    axios.patch("http://localhost:8000/api/authors/" + id, tempObjectToSendToDB)
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
    <div>
      <h1>Favorite authors</h1>
      <Link to={"/authors"}> Home</Link>
      <p> edit author: </p>
      <form onSubmit={submitAuthor} >
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <p>name:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>
          <Link to={"/authors"} >cancel</Link>
          <button type='sumbit' > Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Edit