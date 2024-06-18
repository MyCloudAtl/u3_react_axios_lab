import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Vehicles = (props) => {
    console.log('Vehicles', props)
    
        const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
          const response = await axios.get (`https://swapi.dev/api/vehicles`)
          setVehicles(response.data.results)
        }
        getVehicles()
      }, [])
      console.log(vehicles)
    // if (!props.vehicles) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 

    let navigate = useNavigate()

    const showVehicle = (index) => {
          navigate(`${index}`)
        }
    
    return (
      <div className="Vehicles">
       <h2>Vehicles</h2>
       {vehicles.map((vehicle,index)=> (
        <div className="vehicleDiv" onClick={()=>showVehicle(index)} key={index}>
            <ul>
                <li>Name: {vehicle.name}</li>
                <li>Model: {vehicle.model}</li>
                <li>Manufactured By: {vehicle.manufacturer}</li>
                <li>Cost: ${vehicle.cost_in_credits}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default Vehicles