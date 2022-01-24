
import MovieCard from './MovieCard'


function MovieList({Movies}) {
   
   
    return (
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-between' }}>
         {Movies.map(el=> <MovieCard title={el.title} description ={el.description} poster={el.posterUrl} rate={el.rate}  />)} 
      
        </div>
    )
}

export default MovieList

