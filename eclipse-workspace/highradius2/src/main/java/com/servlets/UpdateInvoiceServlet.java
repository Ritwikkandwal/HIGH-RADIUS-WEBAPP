package com.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.invoicedao;

/**
 * Servlet implementation class UpdateInvoiceServlet
 */
@WebServlet("/UpdateInvoiceServlet")
public class UpdateInvoiceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		invoicedao invoicedao = new invoicedao();
		invoicedao.UpdateInvoice(Integer.parseInt(request.getParameter("sl_no")), request.getParameter("invoice_currency"), request.getParameter("cust_payment_terms"));
	}

}