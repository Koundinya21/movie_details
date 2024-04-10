import { Link } from "react-router-dom";
import "./index.css";

const Header = (props) => {
  const { setSearchQuery } = props;
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="head-container">
      <h1 className="heading">MovieDb</h1>
      <div className="header-items">
        <ul className="items">
          <Link to="/" className="item">
            <li>Popular</li>
          </Link>
          <Link className="item" to="/top-rated-movies">
            <li>Top Rated</li>
          </Link>
          <Link className="item" to="/upcoming-movies">
            <li>Upcoming</li>
          </Link>
        </ul>
        <div className="search-content">
          <input
            type="search"
            className="search"
            onChange={handleSearchChange}
            placeholder="Movie Name"
          />
          <button className="btn" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
