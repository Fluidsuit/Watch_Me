package com.Watch_Me.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.Watch_Me.model.Register;

public class LoginDAO {
    private Connection conn;

    public LoginDAO(Connection conn) {
        this.conn = conn;
    }
    
    public boolean loginValidation(String username, String password) {
        String sql = "SELECT 1 FROM users WHERE username = ? AND password = ? LIMIT 1";
        try (PreparedStatement st = conn.prepareStatement(sql)) {
            st.setString(1, username);
            st.setString(2, password);
            try (ResultSet rs = st.executeQuery()) {
                return rs.next();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
          return false;
    }

    public String registerUser(Register r) {
        String sqlCheckUser = "SELECT EXISTS (SELECT 1 FROM users WHERE username = ?) AS valid";
        String sqlAddUser = "INSERT INTO users (username, password, plan_id, plan_start, plan_end, verification_status) "
                          + "VALUES (?, ?, ?, ?, ?, ?)";

        try (PreparedStatement psCheck = conn.prepareStatement(sqlCheckUser)) {
            psCheck.setString(1, r.getUsername());

            try (ResultSet rs = psCheck.executeQuery()) {
                if (rs.next() && rs.getBoolean("valid")) {
                    return "Username already exists";
                }
            }

            try (PreparedStatement psInsert = conn.prepareStatement(sqlAddUser)) {
                psInsert.setString(1, r.getUsername());
                psInsert.setString(2, r.getPassword());
                psInsert.setInt(3, r.getPlan_id());
                psInsert.setDate(4, new java.sql.Date(r.getPlan_start().getTime()));
                psInsert.setDate(5, new java.sql.Date(r.getPlan_end().getTime()));
                psInsert.setBoolean(6, r.isVerification_status());
                
                int rows = psInsert.executeUpdate();
                conn.commit();
            
                return rows == 1 ? "Registration Successful!" : "Registration failed";
            }

        } catch (SQLException e) {
            e.printStackTrace();
            return "Database error: " + e.getMessage();
        }
    }
}
