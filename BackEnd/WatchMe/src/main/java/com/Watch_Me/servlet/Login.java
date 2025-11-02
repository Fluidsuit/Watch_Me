package com.Watch_Me.servlet;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.Watch_Me.Dao.LoginDAO;
import com.Watch_Me.Util.JWTUtil;


/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Connection conn;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		conn = (Connection) getServletContext().getAttribute("DBConnection");
		
		String body = request.getReader().lines().reduce("", (acc, l) -> acc + l);		
		JSONObject regJsonData = new JSONObject(body);
		
		String uname = regJsonData.getString("username");
		String pass = regJsonData.getString("password");
		
		LoginDAO logDao = new LoginDAO(conn);
		
		if (logDao.loginValidation(uname, pass)) {
		    System.out.println("Login Successful");
		    String token = JWTUtil.genrateJwtToken(uname);
		    response.getWriter().write("{\"status\":\"success\",\"token\":\"" + token + "\",\"message\":\"login successful\"}");
		} else {
			System.out.println("Login Failed");
		    response.setContentType("application/json");
		    response.getWriter().write("{\"status\":\"failed\",\"message\":\"login failed\"}");
		}

		
	}

}
