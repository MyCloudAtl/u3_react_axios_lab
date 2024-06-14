import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Characters from './Characters'
import Planets from './Planets'
import Films from './Films'
import Home from './Home'

const Main = (props) => {
    console.log('Main', props)

    // if (!props.Main) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
    return (
      <div className="Main">
    <Routes>
        <Route path="/starships" element = {<StarshipList/>} />
        <Route path="/" element = {<Home />} />
        <Route path="/films" element = {<Films />} />
        <Route path="/planets" element = {<Planets />} />
        <Route path="/characters" element = {<Characters />} />
    </Routes>
      </div>
    )
    // }   
  }
  export default Main