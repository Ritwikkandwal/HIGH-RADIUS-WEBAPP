import { DataGrid } from "@mui/x-data-grid";
import  React,{ useEffect, useState } from "react";

const columns = [
    { field: 'sl_no', headerName: 'SL NO',width:70,headerClassName: 'super-app-theme--header'}, 
    { field: 'business_code', headerName: 'BUSINESS CODE', width: 150, height: 100,headerClassName: 'super-app-theme--header' }, 
    { field: 'cust_number', headerName: 'CUST NUMBER', width: 150,headerClassName: 'super-app-theme--header'}, 
    { field: 'clear_date', headerName: 'CLEAR DATE', width: 150,headerClassName: 'super-app-theme--header'}, 
    { field: 'buisness_year', headerName: 'BUISNESS YEAR', width: 150 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'doc_id', headerName: 'DOC ID', width: 100 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'posting_date', headerName: 'POSTING DATE', width: 150 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'document_create_date', headerName: 'DOCUMENT CREATE DATE', width: 200,headerClassName: 'super-app-theme--header'},  
    { field: 'due_in_date', headerName: 'DUE IN DATE', width: 150 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'invoice_currency', headerName: 'INVOICE CURRENCY', width: 200,headerClassName: 'super-app-theme--header'}, 
    { field: 'document_type', headerName: 'DOCUMENT TYPE', width: 180,headerClassName: 'super-app-theme--header'}, 
    { field: 'posting_id', headerName: 'POSTING ID', width: 130 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'total_open_amount', headerName: 'TOTAL OPEN AMOUNT', width: 200 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'baseline_create_date', headerName: 'BASELINE CREATE DATE', width: 200 ,headerClassName: 'super-app-theme--header'}, 
    { field: 'cust_payment_terms', headerName: 'CUST PAYMENT TERMS', width: 200 ,headerClassName: 'super-app-theme--header'}, 
      { field: 'buisness_year', headerName: 'BUISNESS YEAR', width: 150 ,headerClassName: 'super-app-theme--header'}, 
      { field: 'invoice_id', headerName: 'INVOICE ID', width: 140 ,headerClassName: 'super-app-theme--header'},
];
const Table = () => {

    const [tableData, setTableData] = useState([]); 
   
    useEffect(() => { 
      fetch("http://localhost:8085/highradius2/fetchservlet") 
        .then((data) => data.json()) 
        .then((data) => setTableData(data)) 
   
    }, []) 
   
    const [pageSize, setPageSize] = React.useState(10);
    console.log(tableData) 

  return (
    <div style={{ height: 450, width: "100%", marginTop: "3vh" }}>
       
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        rowsPerPageOptions={[5,10, 20, 50, 100]}
        pagination
        {...Table}
        rows={tableData}
        columns={columns}
        // pageSize={10}
        checkboxSelection
        getRowId={(tableData) => tableData.sl_no}
        style={{ color: "white" ,borderColor:"black" }}
      />

    </div>
  );
};

export default Table;
