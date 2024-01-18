import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const People = (props) => {

  const navigate = useNavigate();

  const [people, setPeople] = useState({})

  //const { props.starWarsID } = useParams();
  console.log(props.starWarsID)

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/" + props.starWarsID + "/")
      .then(res => {
        console.log(res.data)
        setPeople(res.data)
        console.log("hello")

      })
      .catch(err => {
        console.log(err);
        navigate("/error")
      })
  }, [props.starWarsID])


  return (
    <div>
      <h1>{people.name}</h1>
      <p>Height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Haircolor: {people.hair_color}</p>
      <p>SkinColor: {people.skin_color}</p>
    </div>
  )
}

export default People