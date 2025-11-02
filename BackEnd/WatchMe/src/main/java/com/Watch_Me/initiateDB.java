package com.Watch_Me;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class initiateDB {

	private Connection conn;

	public initiateDB(Connection conn) {
		this.conn = conn;
	}

	public void initializeDB() {
		try {
			Statement st = conn.createStatement();
			conn.setAutoCommit(false);

			String PlanTb = "CREATE TABLE IF NOT EXISTS plans ("
			        + "plan_id INT PRIMARY KEY AUTO_INCREMENT,"
			        + "plan_name VARCHAR(50) UNIQUE NOT NULL,"
			        + "price DECIMAL(10,2) NOT NULL,"
			        + "resolution ENUM('720p(HD)','1080p(Full HD)','4K(Ultra HD)','480p(SD)') NOT NULL,"
			        + "quality ENUM('Good','Better','Best','Fair') NOT NULL,"
			        + "supported_devices VARCHAR(100) NOT NULL,"
			        + "device_count INT NOT NULL,"
			        + "download_support BOOLEAN"
			        + ");";

			st.addBatch(PlanTb);
			
			String insertPlans = "INSERT  IGNORE INTO plans (plan_name, price, resolution, quality, supported_devices, device_count, download_support) VALUES "
			        + "('Basic', 199.00, '720p(HD)', 'Good', 'TV, Mobile, Tablet, Computer', 1, 0),"
			        + "('Standard', 499.00, '1080p(Full HD)', 'Better', 'TV, Mobile, Tablet, Computer', 2, 1),"
			        + "('Premium', 799.00, '4K(Ultra HD)', 'Best', 'TV, Mobile, Tablet, Computer', 4, 1),"
			        + "('Mobile', 149.00, '480p(SD)', 'Fair', 'Mobile, Tablet', 1, 0);";
			
			st.addBatch(insertPlans);
			
			String UserTb = "CREATE TABLE IF NOT EXISTS users ("
			        + "user_id INT PRIMARY KEY AUTO_INCREMENT,"
			        + "username VARCHAR(100) UNIQUE NOT NULL,"
			        + "password VARCHAR(255) NOT NULL,"
			        + "plan_id INT,"
			        + "plan_start DATE,"
			        + "plan_end DATE,"
			        + "verification_status BOOLEAN DEFAULT false,"
			        + "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,"
			        + "FOREIGN KEY (plan_id) REFERENCES plans(plan_id)"
			        + ");";
			
			st.addBatch(UserTb);
			
			int[] cout = st.executeBatch();
			System.out.println(cout);
			conn.commit();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public void createUserInfoTB() {

	}

}
