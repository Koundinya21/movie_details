import "./index.css";

const Poster = (props) => {
  const { posterDetails } = props;
  const {
    backdropPath,
    originalTitle,
    overview,
    genres,
    posterPath,
    releaseDate,
    runTime,
    voteAverage,
  } = posterDetails;
  //   console.log(genres);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const rating = Math.round(voteAverage);
  const imageUrl = `${baseUrl}${posterPath}`;
  const mainImgUrl = `${baseUrl}${backdropPath}`;

  return (
    <>
      <div className="poster-card-container">
        <div className="inner-items">
          <div className="movie-details">
            <div className="img-content">
              <img
                src={imageUrl}
                alt={originalTitle}
                className="original-img"
              />
              <div className="names">
                <h1 className="title-original">{originalTitle}</h1>
                <p className="ratings">Rating: {rating}</p>
                <div className="runtime-genres">
                  <p className="runtime">{runTime} min</p>
                  <ul className="content-genres">
                    {genres &&
                      genres.map((each) => (
                        <li key={each.genreId} className="list-genres">
                          {each.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <p className="release-date">Release Date : {releaseDate}</p>
              </div>
            </div>
            <div className="pad">
              <h1 className="overview">Overview</h1>
              <p className="para">{overview}</p>
            </div>
          </div>
          <img
            src={mainImgUrl}
            alt={originalTitle}
            className="poster-img-fellow"
          />
        </div>
      </div>
    </>
  );
};
export default Poster;
