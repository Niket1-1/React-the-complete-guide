import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies,setMovies]=useState([])
  const [isloading,setisloding]=useState(false);
  const [error,seterror]=useState(null)


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
   setisloding(true);
   seterror(null)
 try{
  const res= await  fetch("https://swapi.dev/api/films/")
  if(!res.ok){
    throw new Error('Something went wrong')
  }

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
  
 }catch(error){
    seterror(error.message)
    
 }

 setisloding(false)
  


  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovie}>Fetch Movies</button>
      </section>
      <section>
       {!isloading && movies.length!=0 && <MoviesList movies={movies} />}
       {!isloading && movies.length===0 && <p>No movies Found</p>}
       {isloading && <p>Loading</p>}
        {!isloading && error && <p>{error}</p>}
      </section>

    </React.Fragment>
  );
}

export default App;
