import { useRef } from 'react';
import LoginInputCss from './LoginInput.module.css';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
function LoginInput(params) {
    let username = useRef();
    let usenavigate = useNavigate();

    function funSignUp() {
        if (validator.isEmpty(username.current.value)) {
            toast.warning("Fill out the Field");
        } else if (validator.isEmail(username.current.value) || validator.isMobilePhone(username.current.value)) {
            sessionStorage.setItem("username",username.current.value);
            usenavigate("/SignUp");
        } else {
            toast.warning("Enter Valid Credential")
        }
    }

    return (
        <>
            <h4 className={LoginInputCss['textLoginInput']}>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className={LoginInputCss['signin-field-div']}>
                <input type='email' ref={username} className={LoginInputCss['email-ip-field']} placeholder='Email Address' />
                <button
                    onClick={funSignUp}
                    className={LoginInputCss['btn-getstarted']}>
                    Get Started <i className='bi bi-chevron-right'></i>
                </button>
            </div>
        </>
    )
}
export default LoginInput;