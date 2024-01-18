import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Planets = (props) => {

  const navigate = useNavigate();

  const [planets, setPlanet] = useState({})

 // const { StarWarsID } = useParams();
 // console.log(StarWarsID)
  console.log(props.StarWarsID)


  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/" + props.starWarsID + "/") 
      .then(res => {
        console.log(res.data)
        setPlanet(res.data)
        console.log("hello")
        
      })
      .catch(err => {
        console.log(err);
        navigate("/error")
      })
  }, [props.starWarsID])



  return (
    <div>
    <h1>{planets.name}</h1>
    <p>Climate: {planets.climate}</p>
    <p>Terrain: {planets.terrain}</p>
    <p>Surface Water: {planets.surface_water}</p>
    <p>Population: {planets.population}</p>
  </div>
  )
}

export default Planets