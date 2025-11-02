import SignInCss from './SignIn.module.css';
import Ntflogo from '../Images/HomeImg/ntflogo.png';
import SignFooter from './SiginFooter/SignFooter';
import RegistrationBody from '../RegistrationCompo/RegistrationBody/RegistrationBody';


function SignIn(params) {

    return (
        <>
            <div className={SignInCss['signin-ui']}>
                <div className={SignInCss['nav-bar']}>
                    <img src={Ntflogo} className={SignInCss['ntf-logo']} alt="Netflix Logo" />
                </div>
               <RegistrationBody/>
            </div>
            <SignFooter></SignFooter>
        </>
    )
}

export default SignIn;