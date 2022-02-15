import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies,setMovies]=useState([])
  const [isloading,setisloding]=useState(false);



  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];



 async function fetchmovie(){
   setisloding(true)
 const res= await  fetch("https://swapi.dev/api/films/")
   const data=await res.json();
      const transformedMovies=data.results.map(movieData=>{
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      });
     setMovies(transformedMovies)
     setisloding(false)
  


  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovie}>Fetch Movies</button>
      </section>
      <section>
       {!isloading && <MoviesList movies={movies} />}
       {isloading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
