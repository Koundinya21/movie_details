import "./index.css";

const CasteCard = (props) => {
  const { casteDetails } = props;
  const { originalName, profilePath, character } = casteDetails;
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const casteMemberPic = `${baseUrl}${profilePath}`;

  return (
    <li className="item-caste">
      <img src={casteMemberPic} alt={originalName} className="caste-img" />
      <p className="name-caste">{originalName}</p>
      <p className="character-name">Character: {character}</p>
    </li>
  );
};
export default CasteCard;
