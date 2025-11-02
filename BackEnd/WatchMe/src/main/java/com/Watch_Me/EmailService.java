package com.Watch_Me;

import java.util.Properties;
import jakarta.mail.*;

import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

public class EmailService {

    public static String sendEmail(String sendTo) {

        final String companyEmail = "projectsmail0101200@gmail.com";
        final String pass = "fxfj pdoi mtsw dnsm";

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(companyEmail, pass);
            }
        });

        OTPGenerator otpGenerator = new OTPGenerator();
        String OTP = otpGenerator.generateOTP();

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(companyEmail));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(sendTo));
            message.setSubject("Your OTP Code");
            message.setText("Your OTP is: " + OTP + "\nIt will expire in 5 minutes.");

            Transport.send(message);
            System.out.println("OTP sent successfully to " + sendTo);

            return OTP; 

        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error sending email: " + e.getMessage());
        }
        return null;
    }
}
