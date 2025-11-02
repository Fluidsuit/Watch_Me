import React, { useEffect, useState } from "react";
import axios from "../axios";

function MyList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const userId = localStorage.getItem("user_id");
      const response = await axios.post("/Favorite", null, {
        params: { action: "list", user_id: userId },
      });
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const handleRemove = async (movieId) => {
    try {
      const userId = localStorage.getItem("user_id");
      await axios.post("/Favorite", null, {
        params: { action: "remove", user_id: userId, movie_id: movieId },
      });
      setFavorites(favorites.filter((movie) => movie.movie_id !== movieId));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My List</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.movie_id}
              className="relative group rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />

             
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-2">
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <button
                  onClick={() => handleRemove(movie.movie_id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;
