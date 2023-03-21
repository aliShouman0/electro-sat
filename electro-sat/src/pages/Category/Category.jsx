import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Category() {
  const { state } = useLocation();
  const [selectionModel, setSelectionModel] = useState([]);
  const columns = [
    {
      field: "selling_price",
      headerName: "مبيع",
      type: "string",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
      border: 1,
    },
    {
      field: "Wholesale_price",
      headerName: "جمله",
      type: "string",
      width: 60,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "bill_number",
      headerName: "فاتوره رقم",
      type: "string",
      width: 80,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "supplier",
      headerName: "المورد",
      type: "string",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "sold",
      headerName: "مُباع",
      type: "number",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rest",
      headerName: "الباقي",
      type: "number",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "الكميه",
      type: "number",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "product_name",
      headerName: "اسم المنتج",
      type: "string",
      width: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "product_id",
      headerName: "رقم المنتج",
      type: "number",
      width: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "user_name",
      headerName: "اسم المسخدم",
      type: "string",
      width: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "id",
      headerName: "ID",
      width: 15,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
  ];

  const rows = [
    {
      selling_price: "780$",
      Wholesale_price: "150$",
      bill_number: 18974,
      supplier: "Lynn",
      quantity: 159,
      rest: 14,
      sold: 10,
      product_name: "USB",
      product_id: 1234,
      user_name: "علي",
      id: 1,
    },
    {
      selling_price: "780$",
      Wholesale_price: "150$",
      bill_number: 18974,
      supplier: "Lynn",
      quantity: 159,
      rest: 12,
      sold: 0,
      product_name: "USB",
      product_id: 1234,
      user_name: "علي",
      id: 2,
    },
    {
      selling_price: "780$",
      Wholesale_price: "150$",
      bill_number: 18974,
      supplier: "Lynn",
      quantity: 159,
      rest: 1,
      sold: 10,
      product_name: "USB",
      product_id: 1234,
      user_name: "علي",
      id: 3,
    },
  ];
  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <>
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44 flex flex-col items-end  ">
        <FontAwesomeIcon
          icon={state.icon}
          size={"3x"}
          className="text-secondary absolute top-0 left-0 "
        />

        <div className="top-bar bg-greyBar h-14 py-2  w-5/6 rounded-lg flex items-center  justify-end font-bold  mb-1 text-white">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 ">
            اضافه منتج
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            اضافه صنف
          </button>
        </div>

        <div className="h-3/4 w-full flex flex-col items-center mt-5   ">
          <p className="w-1/4 h-10 bg-secondary mb-3  text-white  rounded-lg flex items-center justify-center text-lg font-bold">
            {state.title}
          </p>
          <div className="w-5/6 h-3/4 ">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[15, 25, 50]}
              rowHeight={30}
              checkboxSelection={false}
              selectionModel={selectionModel}
              onSelectionModelChange={handleSelectionModelChange}
              sx={{
                boxShadow: 1,
                fontSize: 14,
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Category;
