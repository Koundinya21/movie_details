import "./index.css";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  // const {post}
  const { movieDetails } = props;
  const { title, voteAverage, posterPath, id } = movieDetails;
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const rating = Math.round(voteAverage);
  const imageUrl = `${baseUrl}${posterPath}`;

  return (
    <li className="content">
      <Link to={`/movie/${id}`}>
        <div className="align">
          <img src={imageUrl} alt={title} className="img" />
          <h1 className="title">{title}</h1>
          <p className="rating">rating: {rating}</p>
        </div>
      </Link>
    </li>
  );
};
export default MovieItem;
