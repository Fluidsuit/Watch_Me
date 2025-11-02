import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import validator from 'validator';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function StepThree({ onNext, username }) {

    let txtOTP = useRef();

    async function sendOTP() {
        try {

            let url = "http://localhost:9000/Netflix/ReqOtp";
            let utype;
            if (validator.isEmail(username)) {
                utype = "email";
            } else if (validator.isMobilePhone(username)) {
                utype = "phone";
            } else {
                toast.error("Invalid Credential");
            }

            const response = await fetch(url, {
                method: "Post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: username,
                    type: utype
                }),
                credentials: "include"
            });
            const result = await response.json();
            if (response.ok) {
                if (result.status == "success") {
                    if (result.type == "email") {
                        toast.success("OTP Sent to " + username);
                    } else if (result.type == "phone") {
                        toast.info("OTP is " + result.otp);
                    }
                } else if (result.status == "error") {
                    toast.error("Failed to Send")
                } else {
                    toast.error("Something Went wrong :(")
                }
            }else if(!response.ok){
                toast.error("Failed to send :(");
            }else{
                toast.error("Something went Worng!!")
            }

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    async function verifyOTP() {
        let verificationUrl = "http://localhost:9000/Netflix/VerifyOtp"
        let otp = txtOTP.current.value;
        const verificationResult = await fetch(verificationUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: username,
                otp: otp
            }),
            credentials: "include"
        })

        const res = await verificationResult.json();

        if (verificationResult.ok) {
            if (res.status == "verified") {
                toast.success("Verification Successfull :)")
                onNext();
            } else if (res.status == "invalid") {
                toast.warning("Worng OTP!");
            } else if (res.status == "expired") {
                toast.error("Time out!");
            } else {
                toast.error("Something went wrong");
            }
        } else {
            toast.error("Failed to communicate with server");
        }
    }

    useEffect(() => {
        sendOTP();
    }, [username])

    return (
        <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center h-auto w-[60vh] text-center p-[1em]">
                <ShieldCheckIcon className="text-red-500 w-[3em]" />
                <p className="text-gray-700">STEP 3 OF 4</p>
                <h1 className="font-bold text-[2em]">Great, now let us verify your email</h1>
                <h5 className="m-2 mb-4">Check the code we sent to<b> <br /> {username} to verify.</b></h5>
                <p>Verifying your email will improve account security and help you receive important Netflix communications.</p>
                <input type="text" placeholder="Verification Code Here" id="txtVerificationCode"
                    ref={txtOTP}
                    maxLength={4}
                    pattern="[0-9]"
                    inputMode="numeric"
                    className="border border-black w-full text-center text-[1.3em] rounded h-[6vh]" />
                <button onClick={verifyOTP}
                    className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded text-[1em] w-full font-medium  ">
                    Verify
                </button>
            </div>
        </div>
    )
}
export default StepThree;