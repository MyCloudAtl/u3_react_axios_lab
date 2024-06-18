import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Planets = (props) => {
    // console.log('Planets', props)
    
        const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
          const response = await axios.get (`https://swapi.dev/api/planets`)
          setPlanets(response.data.results)
        }
        getPlanets()
      }, [])
      console.log(planets)
    // if (!props.Planets) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 

    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
      }
    return (
      <div className="Planets">
       <h2>Planets</h2>
       {planets.map((planet,index)=> (
        <div className="planetDiv" onClick={()=>showPlanet(index)}  key={index}>
            <ul>
                <li>Planet Name: {planet.name}</li>
                <li>Climate: {planet.climate}</li>
                <li>Terrain: {planet.terrain}</li>
                <li>Population: {planet.population}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default Planets