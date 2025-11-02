import MainHome from "./MainHome/MainHome";
import Movie from "./MainHome/Movie";
import Home from "./HomeCompo/Home"
import SignIn from "./SignInCompo/SignIn";
import MyList from "./MainHome/MyList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationCompo/RegistrationForm";
import TVShows from "./MainHome/TVShows";
import NewAndPopular from "./MainHome/NewAndPopular";

function App() {
  return (
    <>
      <meta name="google-site-verification" content="pslAFLWLOXNbtadX2CegdllEQ6gIblMbizE32mxJSSg" />
      <ToastContainer
        position="top-center"
      />
      <Router basename="/Watch-Me">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/newAndPopular" element={<NewAndPopular />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<RegistrationForm />} />
          <Route path="/Home" element={<MainHome />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
