let age = 19;
// let canWatch = "Not available";
// if (age >= 18) canWatch = "watch now";
let canWatch = () => {
  if (age >= 18) return "Watch now";
  else {
    return "not available";
  }
};
export const SeriesCard = (props) => {
  const { id, name, rating, description, cast, genre, watch_url } =
    props.curElem;
  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  return (
    <li key={id}><h2>{name}</h2><h3>
      Ratings: <span className={`rating ${ratingClass}`}>{rating}</span>
      </h3>
      <p>Genre: {genre}</p>
      <p>Summary: {description}</p>
      <p>Cast: {props.curElem.cast}</p>
      <a href={watch_url} target="_blank">
        {/* <button>{canWatch()}</button> */}
        <button>{canWatch()}🍿</button>
      </a>
    </li>
  );
};
