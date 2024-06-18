import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const VehiclesPage = (props) => {
    console.log('VehiclesPage', props)
    
let {id} = useParams()

        const [vehicle, setVehicle] = useState()

    useEffect(() => {
        const getVehicle = async () => {
            const response = await axios.get (`https://swapi.dev/api/vehicles`)
            setVehicle(response.data.results[id])
          }
          getVehicle()
        }, [])
      console.log(vehicle)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
        return vehicle ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Name: {vehicle.name}</h2>
                <h3>Manufactruer: {vehicle.manufacturer}</h3>
                <Link to="/starships"> Return to Vehicles</Link>
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default VehiclesPage