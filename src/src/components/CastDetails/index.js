import "./index.css";
import CasteCard from "../CasteCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CastDetails = () => {
  const { id } = useParams();
  const [casteDetails, setCasteDetails] = useState([]);

  useEffect(() => {
    const getCasteDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=812e7206e31c196e73945dd67d3588f6&language=en-US`;
      const options = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJlNzIwNmUzMWMxOTZlNzM5NDVkZDY3ZDM1ODhmNiIsInN1YiI6IjY2MTRiYjEyYWM2MTdjMDE3ZGIyNmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KiH1xzx8DcTS2S4IYcNJoQsYmZwsTE3jq-k5ECYCw9c`,
        },
        method: "GET",
      };

      const data = await fetch(url, options);
      const response = await data.json();
      if (data.ok) {
        const fetchedData = response.cast.map((each) => ({
          id: each.id,
          knownForDepartment: each.known_for_department,
          name: each.name,
          originalName: each.original_name,
          profilePath: each.profile_path,
          character: each.character,
        }));

        setCasteDetails(fetchedData);
      }
    };

    getCasteDetails();
  }, [id]);

  return (
    <>
      <h1 className="caste-heading">Caste</h1>
      <ul className="list-caste-items">
        {casteDetails.map((each) => (
          <CasteCard key={each.id} casteDetails={each} />
        ))}
      </ul>
    </>
  );
};

export default CastDetails;
