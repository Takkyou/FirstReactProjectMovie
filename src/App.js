import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Moviecard from "./Moviecard";
// 6f6ca898

const API_URL = "http://www.omdbapi.com?apikey=6f6ca898 ";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const serachMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.search);
    console.log(movies);
  };
  useEffect(() => {
    serachMovie("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            serachMovie({ searchTerm });
          }}
        ></img>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => {
            <Moviecard movie={movie} key={i} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies</h2>
        </div>
      )}
    </div>
  );
}

export default App;
