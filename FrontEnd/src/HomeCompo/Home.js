import HomeCss from './Home.module.css';
import TvImage from '../Images/HomeImg/TvImage.png';
import DownloadImg from '../Images/HomeImg/DownloadImage.png';
import WhatchEverywhere from '../Images/HomeImg/whatcheverywhere.png'
import KidProfile from '../Images/HomeImg/KidProfile.png'
import { useEffect, useRef, useState } from 'react';
import CallApi from '../APIreq/CallApi';
import FAQsection from './FAQsection/FAQsection';
import LoginFrom from './LoginFrom/LoginFrom';
import LoginInput from './LoginFrom/LoginInput';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeNavBar from './HomeNavBar/HomeNavBar';


function Home(props) {
    const suggestionDivRef = useRef(null);

    let [posters, setposters] = useState([]);
    console.log(posters);


    const handleScroll = (event) => {
        const scrollAmount = 300;
        const direction = event.currentTarget.value;
        suggestionDivRef.current.scrollBy({
            left: direction === 'btnback' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    function funGetUrl(obj) {
        console.log(obj);
        setposters(obj);

    }

    function funOpenMovie(event) {

    }


    useEffect(() => {
        document.title = "Netflix-Clone";
        sessionStorage.clear();
    }, []);

    return (
        <div className={HomeCss['main-outer-div']}>
            <div className={HomeCss['home-ui']}>
                <HomeNavBar></HomeNavBar>
                <LoginFrom></LoginFrom>
            </div>
            {/* <div class={HomeCss['horizon-glow']}></div> */}
            <div className={HomeCss['suggestion-div-main']}>
                <h1>Trending Now</h1>
                <div className={HomeCss['suggestion-div']}>
                    <div style={{ display: 'flex' }}>
                        <button className={HomeCss['sugg-btnback']} onClick={handleScroll} value='btnback'>
                            <i className='bi bi-chevron-left text-light'></i>
                        </button>
                    </div>
                    <div className={HomeCss['suggestion-inner-div']} ref={suggestionDivRef}>
                        {(Array.isArray(posters) ? posters : []).map((x, idx) => (
                            <div className={HomeCss['poster-div']} key={idx}>
                                <img
                                    src={x}
                                    alt='Movie Poster'
                                    onClick={funOpenMovie}
                                />
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <button className={HomeCss['sugg-btnnext']} onClick={handleScroll} value='btnnext'>
                            <i className='bi bi-chevron-right text-light'></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={HomeCss['feature-div-outer']}>
                <h1 style={{ display: 'block' }}>More reasons to join</h1>
                <div className={HomeCss['feature-div']}>
                    <div className={HomeCss['feature-inner-div']}>
                        <h3>Enjoy on your TV</h3><br></br>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        <img src={TvImage} alt='tv-img'></img>
                    </div>
                    <div className={HomeCss['feature-inner-div']}>
                        <h3>Download your shows to watch offline</h3><br></br>
                        <p>Save your favourites easily and always have something to watch.</p>
                        <img src={DownloadImg} alt='Images'></img>
                    </div>                    <div className={HomeCss['feature-inner-div']}>
                        <h3>Watch everywhere</h3><br></br>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                        <img src={WhatchEverywhere} alt='Images'></img>
                    </div>                    <div className={HomeCss['feature-inner-div']}>
                        <h3>Create Profile for Kids</h3><br></br>
                        <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                        <img src={KidProfile} alt="images"></img>
                    </div>
                </div>

                <div>
                    <FAQsection />
                </div>
                <div className='w-3/5 items-center justify-self-center text-center pt-[2em]'>
                    <LoginInput></LoginInput>
                </div>
                <HomeFooter></HomeFooter>
            </div>

            <CallApi geturl={funGetUrl}></CallApi>
        </div>
    );
}

export default Home;