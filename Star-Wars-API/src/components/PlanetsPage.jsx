import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const PlanetsPage = (props) => {
    console.log('PlanetsPage', props)
    
let {id} = useParams()

        const [planet, setPlanet] = useState()

    useEffect(() => {
        const getPlanet = async () => {
            const response = await axios.get (`https://swapi.dev/api/planets`)
            setPlanet(response.data.results[id])
          }
          getPlanet()
        }, [])
      console.log(planet)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
        return planet ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Planet Name: {planet.name}</h2>
                <h3>Climate: {planet.climate}</h3>
                <Link to="/planets"> Return to Planets </Link>
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default PlanetsPage