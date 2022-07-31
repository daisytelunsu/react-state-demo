import React, { useState } from 'react';
//data
import data from "./assets/data/data.json";
//images
import poster1 from './assets/images/minions-the-rise-of-gru.jpg';
import poster2 from './assets/images/movie-poster2.jpg';
//components
import MovieDisplay from './components/MovieDisplay';
//css stylesheet
import './assets/css/App.css';

function App() {
  const [movieRating, setMovieRating] = useState(data);

  const avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
  }

  //callback from the MovieDisplay component
  const addRating = (id, rating) => {
    let mapped = movieRating.map(movie => {
      if (movie.id === id) {
        movie.rating = [...movie.rating, rating];
        console.log(movie)
        console.log(`The average rating for ${movie.name} is ${avg(movie.rating)} from ${movie.rating.length} votes`);
      }
      else {
          movie.rating = [...movie.rating];
      }
      return movie;
    })
    setMovieRating(mapped);  
  }

  return (
    <div className="App">
      <MovieDisplay length={movieRating[0].rating.length} value={avg(movieRating[0].rating)} name={movieRating[0].name} img={poster1} id={movieRating[0].id} addRating={addRating} />
      <MovieDisplay length={movieRating[1].rating.length} value={avg(movieRating[1].rating)} name={movieRating[1].name} img={poster2} id={movieRating[1].id} addRating={addRating} />
    </div>
  );
}

export default App;
