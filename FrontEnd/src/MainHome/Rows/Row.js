import { useState, useEffect, useRef } from "react";
import axios from "../../axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FavIcon from "../../Images/Icon/fav.png";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function ScrollableMovieRow({ fetchUrl, title }) {
  const [movies, setMovies] = useState([]);
  const [favMessage, setFavMessage] = useState("");
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  
  const handleFavClick = (movie) => {
    setFavMessage(`"${movie.title || movie.name}" added to favorites!`);
    setTimeout(() => {
      setFavMessage("");
    }, 2000);
  };

  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>

      <button className="scroll-btn left" onClick={scrollLeft}>
        <ChevronLeft size={30} />
      </button>
      <button className="scroll-btn right" onClick={scrollRight}>
        <ChevronRight size={30} />
      </button>

      <div className="row-cards" ref={rowRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="movie-poster"
            />
            <img
              src={FavIcon}
              alt="Favorite"
              className="fav-icon"
              onClick={() => handleFavClick(movie)}
            />
          </div>
        ))}
      </div>

      {favMessage && <div className="fav-popup">{favMessage}</div>}
    </div>
  );
}

export default ScrollableMovieRow;
