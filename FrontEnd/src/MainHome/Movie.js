import Row from "../MainHome/Rows/Row";
import Navbar from "../MainHome/MainNavBar/NavBar";
import HomeApi from "../APIreq/MainHomeApi";
import Footer from "../MainHome/MainFooter/Footer"
function Movie() {
    return (
        <div className="App bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-20">
                <Row fetchUrl={HomeApi.fetchTopRated} />
            </div>
            <Row fetchUrl={HomeApi.fetchRomanceMovies} />
            <Row fetchUrl={HomeApi.fetchOrignals} />
            <Row fetchUrl={HomeApi.fetchAnimationMovies} />
            <Row fetchUrl={HomeApi.fetchTrending} isLargeRow />
            <Row fetchUrl={HomeApi.fetchHistoryMovies} />
            <Row fetchUrl={HomeApi.fetchFantasyMovies} />
            <Row fetchUrl={HomeApi.fetchRomanceMovies} />
            <Row fetchUrl={HomeApi.fetchTopRated} />
            <Row fetchUrl={HomeApi.fetchFantasyMovies} />
            <Row fetchUrl={HomeApi.SuperHit} />
            <Footer />
        </div>

    );
}

export default Movie;
