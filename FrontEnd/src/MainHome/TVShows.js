import Row from "../MainHome/Rows/Row";
import Navbar from "../MainHome/MainNavBar/NavBar";
import HomeApi from "../APIreq/MainHomeApi";
import Footer from "../MainHome/MainFooter/Footer"
function TVShows() {
    return (
        <div className="App bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-20">
                <Row title="Trending Now" fetchUrl={HomeApi.fetchTrending} isLargeRow />
            </div>
            <Row title="Top Rated" fetchUrl={HomeApi.fetchTopRated} />
            <Row title="Tv Comedy" fetchUrl={HomeApi.fetchFantasyMovies} />
            <Row title="Romance TV Shows" fetchUrl={HomeApi.fetchRomanceMovies} />
            <Row title="History" fetchUrl={HomeApi.fetchHistoryMovies} />
            <Row title="Animation" fetchUrl={HomeApi.fetchAnimationMovies} />
            <Row title="Award-wining" fetchUrl={HomeApi.fetchTopRated} />
            <Row title="Fantasy" fetchUrl={HomeApi.fetchFantasyMovies} />
            <Row title="Romance" fetchUrl={HomeApi.fetchRomanceMovies} />
            <Row title="Netflix Originals" fetchUrl={HomeApi.fetchOrignals} />
            <Row title="Super Hit Movies" fetchUrl={HomeApi.SuperHit} />
            <Footer />
        </div>

    );
}

export default TVShows;
