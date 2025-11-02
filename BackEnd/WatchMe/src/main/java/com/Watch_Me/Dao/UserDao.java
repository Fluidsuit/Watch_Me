package com.Watch_Me.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.Watch_Me.model.User;

public class UserDao {
	private Connection conn;

	public UserDao(Connection conn) {
		this.conn = conn;
	}

	public boolean register(User u) {
		String sql = "INSERT INTO users_tb VALUES(?,?,?,?)";
		try {

			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, u.getUsername());
			ps.setString(2, u.getPassword());
			ps.setBoolean(3, u.isVerificationStatus());
			ps.setInt(4, u.getPlanId());
			return ps.execute();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
