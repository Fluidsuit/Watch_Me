import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
     params: {
    api_key: "f03a75e5de4a7eccdeb872776478c282" 
  }
});
export default instance; 