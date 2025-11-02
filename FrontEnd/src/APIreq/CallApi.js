import { useEffect, useState } from "react";
import Home from "../HomeCompo/Home";

function CallApi(props) {

    let [sugResData, setsugResData] = useState();
    let [poster_url_arr, setposter_url_arr] = useState();
    async function funGetSuggesttion() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGI3MmJlYmJkOTQ1ZDJmYjkwYmY1NzAwYTdjOTZlOSIsIm5iZiI6MTc0OTEwODczMC45NzEsInN1YiI6IjY4NDE0N2ZhZGFlOWMzNzY3MmJmMTJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZca3JaIkNVjQ1ENWMY03e0vanBXO2yGdHbc-vsXGRw'
                }
            };

            const response = await fetch('https://api.themoviedb.org/3/movie/100/recommendations?language=en-US&page=1', options);
            const { results } = await response.json();

            let poster_url = [];
            results.map((x) => {
                poster_url.push("https://image.tmdb.org/t/p/w500" + x.poster_path)
            })

            setposter_url_arr(poster_url);

            props.geturl(poster_url);

            setsugResData(results);
            console.log(results);
            const data = await response.json();
            setsugResData(data);
            console.log(data);
            
        } catch (e) {
            console.log(e);
        }
    }



    useEffect(() => {
        funGetSuggesttion()
    }, [])

}


export default CallApi;