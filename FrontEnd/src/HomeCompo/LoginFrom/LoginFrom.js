import LoginFromCss from './LoginFrom.module.css';
import LoginInput from './LoginInput';

function LoginFrom(params) {

    return (
        <>
            <div className={LoginFromCss['login_div']}>
                <h1>Unlimited movies, TV<br /> shows and more</h1>
                <h3>Starts at ₹149. Cancel at any time.</h3>
               <LoginInput></LoginInput>
            </div>
        </>
    )
}

export default LoginFrom;