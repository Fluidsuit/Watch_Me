import HomeNavBarCss from './HomeNavBar.module.css';
import NtfLogo from '../../Images/HomeImg/ntflogo.png';
import { useNavigate } from 'react-router-dom';
function HomeNavBar(params) {

    const navigate = useNavigate();

    function redirectToSignin() {
        navigate("/SignIn")
    }
    return (
        <>
            <div className={HomeNavBarCss['nav-bar']}>
                <img src={NtfLogo} className={HomeNavBarCss['ntf-logo']} alt="Netflix Logo" />
                <select id='language-selector' className={HomeNavBarCss['lang-select']}>
                    <option>English</option>
                    <option>Marathi</option>
                </select>
                <button id='btn-signin' className={HomeNavBarCss['btn-signin']} onClick={redirectToSignin}>Sign In</button>
            </div>
        </>
    )
}

export default HomeNavBar;