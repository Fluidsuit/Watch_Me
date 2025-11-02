package com.Watch_Me.Util;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JWTUtil {

	private static final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

	public static String genrateJwtToken(String username) {
		return Jwts.builder().setSubject(username).setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 86400000)).signWith(key).compact();
	}

	public static String validateToken(String token) {
		try {
			return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
		} catch (Exception e) {
			throw new RuntimeException("Invalid or expired JWT", e);
		}
	}
}
