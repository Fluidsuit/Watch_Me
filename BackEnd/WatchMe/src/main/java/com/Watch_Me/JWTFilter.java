package com.Watch_Me;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Watch_Me.Util.JWTUtil;

/**
 * Servlet Filter implementation class JWTFilter
 */
@WebFilter("*")
public class JWTFilter extends HttpFilter implements Filter {

	/**
	 * @see HttpFilter#HttpFilter()
	 */
	public JWTFilter() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		String path = req.getServletPath();

		// Skip JWT validation for public endpoints
		if (path.equals("/Login") || path.equals("/RegisterUser") || path.equals("/ReqOtp")
				|| path.equals("/VerifyOtp")) {
			chain.doFilter(request, response); // let it pass
			return;
		}

		// JWT validation for other requests
		String authHeader = req.getHeader("Authorization");
		if (authHeader == null || !authHeader.startsWith("Bearer ")) {
			res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			res.setContentType("application/json");
			res.getWriter().write("{\"status\":\"error\",\"message\":\"Missing or invalid Authorization header\"}");
			return;
		}

		String token = authHeader.substring(7);
		try {
			String username = JWTUtil.validateToken(token);
			req.setAttribute("username", username);
			chain.doFilter(request, response); // only continue if valid
		} catch (Exception e) {
			res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			res.setContentType("application/json");
			res.getWriter().write("{\"error\":\"Invalid or expired token\"}");
		}
	}
}
