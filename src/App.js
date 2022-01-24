import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Companants/NavBarr';
import MovieList from './Companants/MovieList';
import {moviesData} from './data'
import react,{useState} from 'react'
import AddNewMovie from './Companants/AddNewMovie'



function App() {
  const [Movies,setMovies] = useState(moviesData)
  const addingNewMovie=(x)=>{
    return setMovies([...Movies,x])}
  

    const filteringMovies=(rate,title)=>{
      return setMovies(Movies.filter(el=>el.rate>=rate && el.title.includes(title)  ))


    }
  
  return (
    <div>
      <NavBarr filter={filteringMovies} />
      <AddNewMovie  fun={addingNewMovie}  />
      <MovieList Movies={Movies} />

    </div>
  )
}

export default App

