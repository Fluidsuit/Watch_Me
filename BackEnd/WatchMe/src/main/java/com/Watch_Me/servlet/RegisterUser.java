package com.Watch_Me.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Watch_Me.Dao.LoginDAO;
import com.Watch_Me.model.Register;

@WebServlet("/RegisterUser")
public class RegisterUser extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
    	response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        PrintWriter out = response.getWriter();

        try {
            Register reg = new Register();

            reg.setUsername(request.getParameter("username"));
            reg.setPassword(request.getParameter("password"));
            reg.setPlan_id(Integer.parseInt(request.getParameter("plan_id")));
            reg.setPlan_start(Date.valueOf(request.getParameter("plan_start")));
            reg.setPlan_end(Date.valueOf(request.getParameter("plan_end")));
            reg.setVerification_status(Boolean.parseBoolean(request.getParameter("verification_status")));

            Connection conn = (Connection) getServletContext().getAttribute("DBConnection");
            LoginDAO loginDao = new LoginDAO(conn);

            String result = loginDao.registerUser(reg);
            if ("Registration Successful!".equals(result)) {
                out.print("{\"status\":\"success\",\"message\":\"User registered successfully\"}");
            } else if ("Username already exists".equals(result)) {
                out.print("{\"status\":\"error\",\"message\":\"Username already exists\"}");
            } else {
                out.print("{\"status\":\"error\",\"message\":\"" + result + "\"}");
            }

        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\",\"message\":\"" + e.getMessage() + "\"}");
        } finally {
            out.close();
        }
    }
}
