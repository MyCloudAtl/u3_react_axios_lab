import { useState, useEffect } from 'react'
import axios from 'axios'

const Films = (props) => {
    console.log('Films', props)
    
        const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
          const response = await axios.get (`https://swapi.dev/api/films`)
          setFilms(response.data.results)
        }
        getFilms()
      }, [])
      console.log(films)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
    return (
      <div className="Films">
       <h2>Films</h2>
       {films.map((film,index)=> (
        <div className="filmDiv" key={index}>
            <ul>
                <li>Title: {film.title}</li>
                <li>Director: {film.director}</li>
                <li>Produced By: {film.producer}</li>
                <li>Opening: {film.opening_crawl}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default Films