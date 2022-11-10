import { MoviCard } from "./MovieCard"


export const MovieList=({movies,setMovies,searchM,rateM,setMovie})=>{
const Film =  movies.filter(el => el.title.toLowerCase().includes(searchM.toLowerCase())  && el.rating >= rateM).map(movie=> <MoviCard movie={movie} movies={movies} setMovies={setMovies} setMovie={setMovie}/>)   
    return(
        <div className="Movie">
            {
               Film.length ? Film : "Not found"
            }
        </div>
    )
}
