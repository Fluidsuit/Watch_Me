package com.Watch_Me.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.Watch_Me.EmailService;
import com.Watch_Me.PhoneService;

/**
 * Servlet implementation class ReqOtp
 */
@WebServlet("/ReqOtp")
public class ReqOtp extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ReqOtp() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "GET not supported. Use POST.");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");

		String otp;
		String username = request.getParameter("username");
		String unameType = request.getParameter("type");

		try {
			if ("email".equals(unameType)) {
			    otp = EmailService.sendEmail(username);

			    if (otp != null) {
			    	storeOtp(request, otp, username);
			        response.getWriter().write("{\"status\":\"success\",\type\":\"email\"}");
			    
			    } else {
			        response.getWriter().write("{\"status\":\"error\"}");
			    }
			}else if("phone".equals(unameType)) {
				otp = PhoneService.sendSMS(username);
			    if (otp != null) {
			    	storeOtp(request, otp, username);
			        response.getWriter().write("{\"status\":\"success\",\"type\":\"phone\",\"otp\":" + otp + "}");
			    } else {
			        response.getWriter().write("{\"status\":\"error\",\"}");
			    }
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.getWriter().write("{\"status\":\"error\",\"message\":\"" + e.getMessage() + "\"}");
		}

	}
	
	private void storeOtp(HttpServletRequest req,String otp,String username ) {
		HttpSession session = req.getSession();
		session.setAttribute(username, otp);
		session.setMaxInactiveInterval(5*60);
	}

}
