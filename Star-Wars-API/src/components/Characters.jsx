import { useState, useEffect } from 'react'
import axios from 'axios'

const Characters = (props) => {
    // console.log('Characters', props)
    
        const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
          const response = await axios.get (`https://swapi.dev/api/people`)
          setCharacters(response.data.results)
        }
        getCharacters()
      }, [])
      console.log(characters)
    // if (!props.Characters) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
    return (
      <div className="Characters">
       <h2>Characters</h2>
       {characters.map((character,index)=> (
        <div className="characterDiv" key={index}>
            <ul>
                <li>Name: {character.name}</li>
                <li>Gender: {character.gender}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Skin Color: {character.skin_color}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default Characters