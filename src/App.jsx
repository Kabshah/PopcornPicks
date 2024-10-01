import React from "react";
import NetflixSeries from "./Components/NetflixSeries";
// import Practice from "./Practice"; default export ka syntax h
// import Footer from "./Practice"; 
import {Footer} from "./Practice"
import"./Components/Netflix.css"

const App = () => {
  return (<>
  <h1 className="card-heading">Popcorn Picks📺</h1>
      <NetflixSeries/>
      <Footer/>
    </>
  );
};
export default App