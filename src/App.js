import { useState } from 'react';
import './App.css';
import { Nvbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { MovieList } from './components/MovieList';
import { AddMovie } from './components/Addmovie';

function App() {
    const [movies,setMovies] = useState([
      {title : "Game of thrones" , description : "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne." , posterURL : "/images/GOT.jpg" , rating : 4,id : Math.random() },
      {title : "House of dragon " , description : "House of the Dragon, the prequel to Game of Thrones, is here. Based on George R.R. Martin’s “Fire & Blood,” the series, which is set 200 years before the events of Game of Thrones, tells the story of House Targaryen." , posterURL : "/images/HOD.jpg" , rating : 4,id : Math.random() },
      {title : "The 100" , description : "The 100 follows post-apocalyptic survivors from a space habitat, the Ark, who return to Earth nearly a century after a devastating nuclear apocalypse. The first people sent to Earth are a group of juvenile delinquents who encounter descendants of survivors of the nuclear disaster on the ground." , posterURL : "/images/The100.jpg" , rating : 3,id : Math.random() },
    ])
  
    const [searchM,setSearchM] = useState('')
    const [rateM,setRateM] = useState(0)
  return (
    <div>
      <Nvbar/>  
      <br/>
      <div className='serch'>
      <AddMovie  movies={movies} setMovies={setMovies}/>
      <Filter setSearchM={setSearchM} setRateM={setRateM} searchM={searchM} rateM={rateM}/>
      </div>
      <br/>
      <MovieList movies={movies} setMovies={setMovies} searchM={searchM} rateM={rateM}/>
    </div>
  );
}

export default App;
