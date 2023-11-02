import React from "react";
import axios from 'axios'
import { url } from "../components/Env";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {results},
    }  = await axios.get(url);
  //  console.log(results);
    this.setState({results, isLoading:false});
  };

  componentDidMount() {
    this.getMovies()
  };

  render(){
    const { isLoading, results } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
        {results.map((movie)=> {
          //console.log(movie);
          return(
            <Movie
              key = {movie.id}
              id = {movie.id}
              release_date = {movie.release_date}
              title = {movie.title}
              overview = {movie.overview}
              poster_path = {movie.poster_path}
              genre_ids={movie.genre_ids}
              />
          );
        })}
        </div>
      )}
      </section>
    );
  }
}

export default Home;
