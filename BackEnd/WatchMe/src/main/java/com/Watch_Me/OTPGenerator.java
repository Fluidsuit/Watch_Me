package com.Watch_Me;

import java.util.Random;

public class OTPGenerator {
    public String generateOTP() {
        Random random = new Random();
        int otp = 1000 + random.nextInt(9000);
        return String.valueOf(otp);
    }
}
