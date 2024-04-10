// import { Routes, Route } from "react-router-dom";

// import "./index.css";
// import Home from "./components/Home";
// import TopRated from "./components/TopRated";
// import UpComingMovies from "./components/UpComingMovies";

// const App = () => (
//   <>
//     <Routes>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/top-rated-movies" component={TopRated} />
//       <Route exact path="/upcoming-movies" component={UpComingMovies} />
//     </Routes>
//   </>
// );

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useState } from "react";
import "./index.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import UpComingMovies from "./components/UpComingMovies";
import MovieDetails from "./components/MovieDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top-rated-movies" element={<TopRated />} />
      <Route path="/upcoming-movies" element={<UpComingMovies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
