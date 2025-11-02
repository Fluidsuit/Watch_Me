const API_KEY = "f03a75e5de4a7eccdeb872776478c282";

const HomeApi = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
  fetchPlayingMovies: `/movie/now_playing?language=en-US&page=1`,
  SuperHit: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  feelgood: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default HomeApi;
