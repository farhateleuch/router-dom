import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Companants/NavBarr';
import MovieList from './Companants/MovieList';
import {moviesData} from './data'
import {useState} from 'react'
import AddNewMovie from './Companants/AddNewMovie'

import {
  
  Routes,
  Route
} from "react-router-dom";



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
      <Routes>
      <Route exact path="/" element={<> <MovieList Movies={Movies} /> </>}/>
      <Route path="/addnew" element={<><AddNewMovie fun={addingNewMovie}/>  </>}/>
     
      </Routes>
       
    </div>
  )
}

export default App

