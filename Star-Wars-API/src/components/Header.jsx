import Nav from "./Nav";

const Header = (props) => {
    console.log('Header', props)

    // if (!props.Header) {
    //     return <h1> Loading... Please Wait </h1>
    // } else { 
    return (
      <div className="Header">
       <h2>Star Wars Header</h2>
       <Nav />
      </div>
    )
    // }   
  }
  export default Header