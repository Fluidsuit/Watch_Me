import { useRef, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import RegistrationBodyCSS from "./RegistrationBody.module.css";

function RegistrationBody(params) {
    let username = useRef();
    let password = useRef();
    let [passFlag, setPassFlag] = useState(false);
    let [btnUsecodevalue, setbtnUseCodeValue] = useState("Use a sign-in code");

    function forgetPassword() { }

    function funSignIn() {
        let user = username.current.value;
        let pass = password.current.value;
        console.log();

        if (validator.isEmpty(user) || validator.isEmpty(pass)) {
            toast.warning("Enter valid Username and Password!", { autoClose: 1800 });
        } else if (validator.isEmail(username.current.value)) {
            toast.success("This is Email");
        } else if (validator.isMobilePhone(user, 'en-IN')) {
            toast.success("this is phone no");
        } else {
            toast.warning("Enter valid Username and Password!", { autoClose: 1800 });
        }
    }

    function funUseCode() {
        let passField = document.getElementById("passInputField");

        if (passFlag) {
            passField.style.display = "flex";
            setbtnUseCodeValue("Use a sign-in code");
            setPassFlag(false);

        } else if (!passFlag) {
            passField.style.display = "none";
            setbtnUseCodeValue("Use Password");
            setPassFlag(true);
        }
    }

    return (
        <>
            <div className={`w-[30em] p-16 pt-10 place-self-center block justify-center mt-[1em] text-white ${RegistrationBodyCSS['sigin-panel-div']}`}>
                <h4>Sign In</h4>
                <input type='text' placeholder='Email or Mobile Number' ref={username} className={`${RegistrationBodyCSS['email-pass-ip']} block w-full mt-[2em] h-[3.4em] p-3`} />
                <input id='passInputField' type='password' placeholder='Password' ref={password} className={`${RegistrationBodyCSS['email-pass-ip']} block w-full mt-[1em] h-[3.4em] p-3`} />
                <input type='button' value="Sign In" onClick={funSignIn} className={'w-full h-[2.6em] mt-3 rounded-[5px] bg-red-600 text-white font-bold'} />
                <label className="block text-center m-3 text-gray-300">OR</label>
                <input id='btnUseCode' type='button' value={btnUsecodevalue} onClick={funUseCode} className="w-full h-[2.6em] rounded-md bg-[rgba(237,237,237,0.2)] text-white font-bold" />
                <a href="h" onClick={forgetPassword} className='block text-center m-3 text-white'>Forgot Password?</a>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="h-[1.2em] w-[1.2em] accent-red-600" />
                        <span className="ml-2 bg-transparent">Remember me</span>
                    </label>
                </div>
                <span className='text-gray-300'>
                    New to WatchMe? <Link to="/SignUp" className='text-white'>Sign Up now.</Link>
                </span>
                <p className='text-[0.8em] mt-[2em]'>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </p>
            </div>
        </>
    )
}

export default RegistrationBody;