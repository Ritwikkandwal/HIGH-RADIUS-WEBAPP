import axios from "axios";

export const getData = async () => {
   let response = await axios.get("http://localhost:8085/highradius2/fetchservlet");

   return response.data;
} 

export const addItem = async (item) => {
   let data = "doc_id=" + item.doc_id + "&business_code=" + item.business_code + "&posting_date=" + item.posting_date + "&document_create_date=" + item.document_create_date + "&due_in_date=" + item.due_in_date + "&invoice_currency=" + item.invoice_currency + "&document_type=" + item.document_type + "&posting_id=" + item.posting_id + "&total_open_amount=" + item.total_open_amount + "&baseline_create_date=" + item.baseline_create_date + "&cust_payment_terms=" + item.cust_payment_terms + "&invoice_id=" + item.invoice_id + "&aging_bucket=" + item.aging_bucket;

   let response = await axios.get("http://localhost:8085/main1/AddInvoiceServlet?"+ data);
   return response.data;
}

export const updateItem = async (item) => {
   let data = "doc_id=" + item.doc_id + "&aging_bucket=" + item.aging_bucket;
   let response = await axios.get("http://localhost:8085/HRC/update?"+ data);

   return response.data;
}

export const deleteItem = async (doc_id) => {
   let data = "doc_id=" + doc_id;
   let response = await axios.get("http://localhost:8085/HRC/delete?"+ data);

   return response.data;
}