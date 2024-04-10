// import { Component } from "react";
// import { withRouter } from "react-router-dom";

// class MovieDetails extends Component {
//   state = {
//     movieDetails: {},
//   };

//   componentDidMount() {
//     this.getMovieDetails();
//   }

//   getMovieDetails = async () => {
//     const { match } = this.props;
//     const { params } = match;
//     const { id } = params;

//     const url = `
// https://api.themoviedb.org/3/movie/${id}?api_key=812e7206e31c196e73945dd67d3588f6&language=en-US`;
//     const options = {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJlNzIwNmUzMWMxOTZlNzM5NDVkZDY3ZDM1ODhmNiIsInN1YiI6IjY2MTRiYjEyYWM2MTdjMDE3ZGIyNmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KiH1xzx8DcTS2S4IYcNJoQsYmZwsTE3jq-k5ECYCw9c`,
//       },
//       method: "GET",
//     };

//     const data = await fetch(url, options);
//     const response = await data.json();
//     if (data.ok) {
//       console.log(response);
//     }
//   };
//   render() {
//     return <h1>HI</h1>;
//   }
// }
// export default withRouter(MovieDetails);
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Poster from "../MoviePoster";
import CastDetails from "../CastDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  //   const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=812e7206e31c196e73945dd67d3588f6&language=en-US`;
      const options = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJlNzIwNmUzMWMxOTZlNzM5NDVkZDY3ZDM1ODhmNiIsInN1YiI6IjY2MTRiYjEyYWM2MTdjMDE3ZGIyNmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KiH1xzx8DcTS2S4IYcNJoQsYmZwsTE3jq-k5ECYCw9c`,
        },
        method: "GET",
      };
      const data = await fetch(url, options);
      const response = await data.json();
      if (data.ok) {
        console.log(response);
        // setMovieDetails(response);
        const changeData = (each) => ({
          backdropPath: each.backdrop_path,
          budget: each.budget,
          originalTitle: each.original_title,
          overview: each.overview,
          genres: each.genres.map((eachGenre) => ({
            genreId: eachGenre.id,
            name: eachGenre.name,
          })),
          posterPath: each.poster_path,
          releaseDate: each.release_date,
          runTime: each.runtime,
          voteAverage: each.vote_average,
        });
        const formattedData = changeData(response);
        setMovieDetails(formattedData);
        console.log(formattedData);
      }
    };

    getMovieDetails();
  }, [id]);

  return (
    <>
      <Header />
      <div className="bg-container">
        <Poster posterDetails={movieDetails} />
        <CastDetails />
      </div>
    </>
  ); // Display whatever details you want
};

export default MovieDetails;
