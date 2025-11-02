import Row from "../MainHome/Rows/Row";
import Banner from "../MainHome/MainBanner/Banner";
import Navbar from "../MainHome/MainNavBar/NavBar";
import HomeApi from "../APIreq/MainHomeApi";
import Footer from "../MainHome/MainFooter/Footer"

function Home() {
  return (
    <div className="App bg-black min-h-screen text-white" >
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={HomeApi.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={HomeApi.fetchTopRated} />
      <Row title="Netflix Originals" fetchUrl={HomeApi.fetchOrignals} />
      <Row title="Romance TV Shows" fetchUrl={HomeApi.fetchRomanceMovies} />
      <Row title="History" fetchUrl={HomeApi.fetchHistoryMovies} />
      <Row title="Animation" fetchUrl={HomeApi.fetchAnimationMovies} />
      <Row title="Fantasy" fetchUrl={HomeApi.fetchFantasyMovies} />
      <Row title="Romance" fetchUrl={HomeApi.fetchRomanceMovies} />
      <Row title="Award-wining" fetchUrl={HomeApi.fetchTopRated} />
      <Row title="Tv Comedy" fetchUrl={HomeApi.fetchFantasyMovies} />
      <Row title="Super Hit Movies" fetchUrl={HomeApi.SuperHit} />
      <Footer />
    </div>
  );
}
export default Home;
