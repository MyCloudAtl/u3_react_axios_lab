<img src="https://i.imgur.com/go18uJE.jpg">

## SEIR 1003

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://www.swapi.dev/) and render its data. 

## Setup + Starting Instructions 

1. Create a new react app in this folder. (`npx create-react-app .`)
2. Clean up CRA starter code and verify app loads without issue.
3. Import React-Router Dependencies (`npm i react-router-dom`)
4. Setup your App to Router to render `<StarshipsList />` `<StarshipPage />` elements. (You can start with boilerplate components to get started)
5. After verifying react-router pathing is working displays the correct component

## Primary App Goals
1. Obtain all of the starships from the API Endpoint: `https://swapi.dev/api/starships`) and display each ship inside your `<StarshipsList/>`. 
1. Use `useEffect` to make the request as soon as your topmost-level component loads (App), and store it in state (starShips).
1. Map and render all information from your API call

1. Install and set up your React Router. Create a landing page with links to /Startships, /planets, and /characters
1. In each of those routes, run a similar API call rendering and mapping data in each component for those endpoints


## Stretch Goals
1. Add a `<404/>` component, that is rendered by `React-Router` if no matching path is found, or a bad address added manually in the browser.
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Add some custom CSS styling to approximate a cool, sci-fi aesthetic. 

