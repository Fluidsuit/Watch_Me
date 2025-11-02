package com.Watch_Me.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class VerifyOtp
 */
@WebServlet("/VerifyOtp")
public class VerifyOtp extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public VerifyOtp() {
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
        response.setHeader("Access-Control-Allow-Credentials", "true"); // allow cookies/session
		response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		String username = request.getParameter("username");
		String enteredOtp = request.getParameter("otp");

		HttpSession session = request.getSession(false);

		if (session != null) {
			String storedOtp = (String) session.getAttribute(username);

			if (storedOtp != null && storedOtp.toString().equals(enteredOtp)) {
				response.getWriter().write("{\"status\":\"verified\"}");
			} else {
				response.getWriter().write("{\"status\":\"invalid\"}");
			}
		} else {
			response.getWriter().write("{\"status\":\"expired\"}");
		}

	}

}
