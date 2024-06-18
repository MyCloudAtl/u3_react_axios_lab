import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const StarshipPage = (props) => {
    console.log('StarshipPage', props)
    
let {id} = useParams()

        const [starship, setStarship] = useState()

    useEffect(() => {
        const getStarShip = async () => {
            const response = await axios.get (`https://swapi.dev/api/starships`)
            setStarship(response.data.results[id])
          }
          getStarShip()
        }, [])
      console.log(starship)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
        return starship ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Name: {starship.name}</h2>
                <h3>Manufactruer: {starship.manufacturer}</h3>
                <Link to="/starships"> Return to starship list</Link>
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default StarshipPage