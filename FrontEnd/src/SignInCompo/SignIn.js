import SignInCss from './SignIn.module.css';
import Ntflogo from '../Images/Icon/Watch Me.svg';
import SignFooter from './SiginFooter/SignFooter';
import RegistrationBody from '../RegistrationCompo/RegistrationBody/RegistrationBody';


function SignIn(params) {

    return (
        <>
            <div className={SignInCss['signin-ui']}>
                <div className={SignInCss['nav-bar']}>
                    <img src={Ntflogo} className={SignInCss['ntf-logo']} alt="WatchMe Logo" />
                </div>
               <RegistrationBody/>
            </div>
            <SignFooter></SignFooter>
        </>
    )
}

export default SignIn;