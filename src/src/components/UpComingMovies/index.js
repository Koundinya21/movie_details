import { Component } from "react";
import "./index.css";
import Header from "../Header";
import MovieItem from "../MovieItem";

class UpComingMovies extends Component {
  state = {
    upComingMovies: [],
  };

  componentDidMount() {
    this.getUpComingMovies();
  }

  getUpComingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=812e7206e31c196e73945dd67d3588f6&language=en-US&page=1";
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
        upComingMovies: moviesData,
      });
    }
  };

  renderUpComingMovies = () => {
    const { upComingMovies } = this.state;

    return (
      <ul className="bg-container">
        {upComingMovies.map((each) => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </ul>
    );
  };

  render() {
    return (
      <>
        <Header />
        {this.renderUpComingMovies()}
      </>
    );
  }
}
export default UpComingMovies;
