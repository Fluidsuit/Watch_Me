import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import validator from 'validator';

function StepTwo({ onNext }) {

    let [username, setUsername] = useState("");
    let password = useRef();

    function validateinput() {
        if (validator.isEmpty(username) || validator.isEmpty(password.current.value)) {
            toast.error("Enter Username and Password in correct format")
        } else if (validator.isEmail(username) || validator.isMobilePhone(username)) {
            if (validator.isStrongPassword(password.current.value, {
                minLength: 8, minLowercase: 1, minNumbers: 1, minUppercase: 1, minSymbols: 1
            })) {
                sessionStorage.setItem("username", username);
                onNext({ "username": username, "passkey": password.current.value });
            }else{
                toast.error("Please use Strong password")
            }
        } else {
            toast.error("Please fill out details properly");
        }
    }

    useEffect(() => {
        const sessionUsername = sessionStorage.getItem("username");
        if (sessionUsername) {
            setUsername(sessionUsername);
        }
    }, []);



    return (
        <>
            <div className="flex-block h-auto w-[60vh] justify-self-safe-center place-self-center p-[1em]">
                <p className="text-gray-700">STEP 2 OF 4</p>
                <h1 className="font-bold">Create a password to start your membership</h1>
                <h5 className="m-2 mb-4">Just a few more steps and you're done! We hate paperwork, too.</h5>
                <input type="text" placeholder="Email ID or Phone No" className="w-full h-[2.8em] m-1 p-3 border border-black rounded-[3px] text-black hover:border-double"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                <input type="password" ref={password} placeholder="Set Password" className="w-full h-[2.8em] m-1 p-3 border border-black rounded-[3px] text-black hover:border-double" />
                <button
                    onClick={validateinput}
                    className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded w-full font-medium">
                    Next
                </button>
            </div>
        </>
    )
}

export default StepTwo;