import HomeNavBarCss from './HomeNavBar.module.css';
import NtfLogo from '../../Images/Icon/Watch Me.svg';
import { useNavigate } from 'react-router-dom';
function HomeNavBar(params) {

    const navigate = useNavigate();

    function redirectToSignin() {
        navigate("/SignIn")
    }
    return (
        <>
            <div className={HomeNavBarCss['nav-bar']}>
                <img src={NtfLogo} className={HomeNavBarCss['ntf-logo']} alt="WatchMe Logo" />
                <select id='language-selector' className={HomeNavBarCss['lang-select']}>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button id='btn-signin' className={HomeNavBarCss['btn-signin']} onClick={redirectToSignin}>Sign In</button>
            </div>
        </>
    )
}

export default HomeNavBar;