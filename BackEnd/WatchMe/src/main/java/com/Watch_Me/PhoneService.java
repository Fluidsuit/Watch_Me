package com.Watch_Me;

public class PhoneService {

    public static String sendSMS(String phoneNo) {
        OTPGenerator otpGenerator = new OTPGenerator();
        String OTP = otpGenerator.generateOTP();

        return OTP;
    }
}
