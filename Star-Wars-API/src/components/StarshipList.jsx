import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const StarshipList = (props) => {
    // console.log('StarshipList', props)
    
        const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarShips = async () => {
          const response = await axios.get (`https://swapi.dev/api/starships`)
          setStarships(response.data.results)
        }
        getStarShips()
      }, [])
      console.log(starships)
    // if (!props.StarshipList) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
    let navigate = useNavigate()

    const showShip = (index) => {
          navigate(`${index}`)
        }

    return (
      <div className="StarshipList">
       <h2>StarshipList</h2>
       {starships.map((starship,index)=> (
        <div className="starshipDiv" onClick={()=>showShip(index)} key={index}>
            <ul>
                <li>Name: {starship.name}</li>
                <li>Manufactruer: {starship.manufacturer}</li>
                <li>Cost: ${starship.cost_in_credits}</li>
                <li>Capacity: {starship.passengers}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default StarshipList