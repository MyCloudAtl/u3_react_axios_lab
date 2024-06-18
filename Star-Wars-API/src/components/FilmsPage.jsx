import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const FilmsPage = (props) => {
    console.log('FilmsPage', props)
    
let {id} = useParams()

        const [film, setFilm] = useState()

    useEffect(() => {
        const getFilm = async () => {
            const response = await axios.get (`https://swapi.dev/api/films`)
            setFilm(response.data.results[id])
          }
          getFilm()
        }, [])
      console.log(film)
    // if (!props.Films) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
        return film ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Title: {film.title}</h2>
                <h3>Director: {film.director}</h3>
                <Link to="/films"> Return to Films</Link>
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default FilmsPage