import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const name = "Queen of tears";
const rating = 8.2;
const summary ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis at natus rerum officia,corrupti aut eaque quibusdam delectus molestiae?";
let age = 19;
// let canWatch = "Not available";
// if (age >= 18) canWatch = "watch now";
// const Genre = () => {
//   const genre = "Comedy";
//   return genre;
// };
const NetflixSeries = () => {
    return(
    <ul>
      {seriesData.map((curElem) => {
       return <SeriesCard key = {curElem.id} curElem ={curElem}/>
      })}
    </ul>
    )
};
{
  /* <p>Genre: {Genre()}</p> */}
{
  /* <button>{age>=18 ? "Watch now" : "Not available"}</button> */}
{
  /* <button>{canWatch}</button> */}
export default NetflixSeries;