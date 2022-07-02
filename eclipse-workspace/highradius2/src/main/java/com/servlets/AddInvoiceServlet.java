package com.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.invoicedao;
import com.pojo.InvoicePojo;


@WebServlet("/AddInvoiceServlet")
public class AddInvoiceServlet extends HttpServlet {

     protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		InvoicePojo Invoice = new InvoicePojo();
		
		Invoice.setBusiness_code(request.getParameter("business_code"));
		Invoice.setCust_number(Long.parseLong(request.getParameter("cust_number")));
		Invoice.setClear_date(request.getParameter("clear_date"));
		Invoice.setBuisness_year(Integer.parseInt(request.getParameter("buisness_year")));
		Invoice.setDoc_id(Long.parseLong(request.getParameter("doc_id")));
		Invoice.setPosting_date(request.getParameter("posting_date"));
		Invoice.setDocument_create_date(request.getParameter("document_create_date"));
		Invoice.setDue_in_date(request.getParameter("due_in_date"));
		Invoice.setInvoice_currency(request.getParameter("invoice_currency"));
		Invoice.setDocument_type(request.getParameter("document_type"));
		Invoice.setPosting_id(Integer.parseInt(request.getParameter("posting_id")));
		Invoice.setTotal_open_amount(Float.parseFloat(request.getParameter("total_open_amount")));
		Invoice.setBaseline_create_date(request.getParameter("baseline_create_date"));
		Invoice.setCust_payment_terms(request.getParameter("cust_payment_terms"));
		Invoice.setInvoice_id(Long.parseLong(request.getParameter("invoice_id")));
		
		invoicedao invoicedao = new invoicedao();
		invoicedao.AddInvoice(Invoice);
		System.out.println(Invoice.toString());
	}}