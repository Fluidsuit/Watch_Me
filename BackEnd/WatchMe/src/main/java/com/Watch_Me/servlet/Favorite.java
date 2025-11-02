package com.Watch_Me.servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.sql.*;
import org.json.JSONArray;
import org.json.JSONObject;

import com.Watch_Me.Listener.DBListener;

@WebServlet("/Favorite")
public class Favorite extends HttpServlet {
    private Connection conn;

    @Override
    public void init() throws ServletException {
        conn = DBListener.getConnection();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String action = request.getParameter("action");
        String userId = request.getParameter("user_id");

        try {
            if ("add".equals(action)) {
                String movieId = request.getParameter("movie_id");
                String title = request.getParameter("title");
                String posterPath = request.getParameter("poster_path");
                String mediaType = request.getParameter("media_type");

                String sql = "INSERT INTO favorites (user_id, movie_id, title, poster_path, media_type) VALUES (?, ?, ?, ?, ?)";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, userId);
                ps.setString(2, movieId);
                ps.setString(3, title);
                ps.setString(4, posterPath);
                ps.setString(5, mediaType);
                ps.executeUpdate();

                out.print("{\"status\":\"success\",\"message\":\"Added to favorites\"}");
            } 
            else if ("remove".equals(action)) {
                String movieId = request.getParameter("movie_id");
                String sql = "DELETE FROM favorites WHERE user_id = ? AND movie_id = ?";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, userId);
                ps.setString(2, movieId);
                ps.executeUpdate();

                out.print("{\"status\":\"success\",\"message\":\"Removed from favorites\"}");
            } 
            else if ("list".equals(action)) {
                String sql = "SELECT * FROM favorites WHERE user_id = ?";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, userId);
                ResultSet rs = ps.executeQuery();

                JSONArray arr = new JSONArray();
                while (rs.next()) {
                    JSONObject obj = new JSONObject();
                    obj.put("movie_id", rs.getString("movie_id"));
                    obj.put("title", rs.getString("title"));
                    obj.put("poster_path", rs.getString("poster_path"));
                    obj.put("media_type", rs.getString("media_type"));
                    arr.put(obj);
                }

                out.print(arr.toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\",\"message\":\"" + e.getMessage() + "\"}");
        }
    }

    @Override
    public void destroy() {
        try {
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
