import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const CharactersPage = (props) => {
    // console.log('CharactersPage', props)
    
let {id} = useParams()

        const [character, setCharacter] = useState()

    useEffect(() => {
        const getCharaCter = async () => {
            const response = await axios.get (`https://swapi.dev/api/people`)
            setCharacter(response.data.results[id])
          }
          getCharaCter()
        }, [])
      console.log(character)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
        return character ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Name: {character.name}</h2>
                <h3>Gender: {character.gender}</h3>
                <Link to="/characters"> Return to character list</Link>
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default CharactersPage
