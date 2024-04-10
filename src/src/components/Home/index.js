import Header from "../Header";
import { Component } from "react";

import "./index.css";
import MovieItem from "../MovieItem";

class Home extends Component {
  state = {
    allMoviesData: [],
    // isLoading: false,
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = async () => {
    // this.setState({ isLoading: true });
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=812e7206e31c196e73945dd67d3588f6&language=en-US&page=1";
    const options = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJlNzIwNmUzMWMxOTZlNzM5NDVkZDY3ZDM1ODhmNiIsInN1YiI6IjY2MTRiYjEyYWM2MTdjMDE3ZGIyNmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KiH1xzx8DcTS2S4IYcNJoQsYmZwsTE3jq-k5ECYCw9c`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (response.ok) {
      //   console.log(responseData.results);
      const moviesData = responseData.results.map((eachData) => ({
        adult: eachData.adult,
        backdropPath: eachData.backdrop_path,
        genreIds: eachData.genre_ids,
        id: eachData.id,
        originalLanguage: eachData.original_language,
        originalTitle: eachData.original_title,
        overview: eachData.overview,
        popularity: eachData.popularity,
        posterPath: eachData.poster_path,
        releaseDate: eachData.release_date,
        title: eachData.title,
        voteAverage: eachData.vote_average,
        voteCount: eachData.vote_count,
      }));

      this.setState({
        allMoviesData: moviesData,
      });
    }
  };

  //   renderLoader = () => (
  //     <div>
  //       <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  //     </div>
  //   );

  //   renderMovies = () => {
  //     const { allMoviesData } = this.state;
  //     return (
  //       <div className="bg-container">
  //         <ul>
  //           {allMoviesData.map((eachMovie) => (
  //             <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   };

  renderMovies = () => {
    const { allMoviesData } = this.state;

    return (
      <ul className="bg-container">
        {allMoviesData.map((each) => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </ul>
    );
  };

  render() {
    return (
      <>
        <Header />
        {this.renderMovies()}
      </>
    );
  }
}
export default Home;
