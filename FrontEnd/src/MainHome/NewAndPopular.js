import Row from "../MainHome/Rows/Row";
import Navbar from "../MainHome/MainNavBar/NavBar";
import HomeApi from "../APIreq/MainHomeApi";
import Footer from "../MainHome/MainFooter/Footer";

function NewAndPopular() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Navbar />
      <div className="pt-20">
        <Row title="Top Rated" fetchUrl={HomeApi.fetchTopRated} />
      </div>

      <Row title="Romance Movies" fetchUrl={HomeApi.fetchRomanceMovies} />
      <Row title="Netflix Originals" fetchUrl={HomeApi.fetchOrignals} />
      <Row title="Animation" fetchUrl={HomeApi.fetchAnimationMovies} />
      <Row title="Trending Now" fetchUrl={HomeApi.fetchTrending} isLargeRow />
      <Row title="History" fetchUrl={HomeApi.fetchHistoryMovies} />
      <Row title="Fantasy" fetchUrl={HomeApi.fetchFantasyMovies} />
      <Row title="Romance" fetchUrl={HomeApi.fetchRomanceMovies} />
      <Row title="Top Rated Again" fetchUrl={HomeApi.fetchTopRated} />
      <Row title="Tv Comedy" fetchUrl={HomeApi.fetchFantasyMovies} />
      <Row title="Super Hit Movies" fetchUrl={HomeApi.SuperHit} />

      <Footer />
    </div>
  );
}

export default NewAndPopular;
