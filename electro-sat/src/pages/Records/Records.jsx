import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Records() {
  const salesColumns = [
    {
      field: "paid_rest_usd",
      headerName: "المدفوع/الباقي USD ",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
      border: 1,
    },
    {
      field: "paid_rest_lira",
      headerName: "المدفوع/الباقي L.L",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "discount",
      headerName: "حسم",
      type: "string",
      width: 80,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "total_price",
      headerName: "الاجمالي",
      type: "string",
      width: 60,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "single_price",
      headerName: "الفردي",
      type: "string",
      width: 60,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "creditor",
      headerName: "دائن",
      type: "string",
      width: 60,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "agent",
      headerName: "العميل",
      type: "string",
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
      field: "category",
      headerName: "اسم الصنف",
      type: "string",
      width: 80,
      editable: false,
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
      editable: true,
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
      field: "time",
      headerName: "الوقت",
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

  const creditorColumns = [
    {
      field: "paid_rest_usd",
      headerName: "المدفوع/الباقي USD ",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
      border: 1,
    },
    {
      field: "paid_rest_lira",
      headerName: "المدفوع/الباقي L.L",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "discount",
      headerName: "حسم",
      type: "string",
      width: 80,
      editable: true,
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
      field: "time",
      headerName: "الوقت",
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

  const expensesColumns = [
    {
      field: "paid_rest_usd",
      headerName: "المدفوع/الباقي USD ",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
      border: 1,
    },
    {
      field: "paid_rest_lira",
      headerName: "المدفوع/الباقي L.L",
      type: "string",
      width: 125,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "وصف",
      type: "string",
      width: 125,
      editable: true,
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
      field: "time",
      headerName: "الوقت",
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
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
    {
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
    {
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
    {
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
    {
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
    {
      id: 1,
      paid_rest_usd: "15$",
      paid_rest_lira: "115,000 L.L",
      total_price: "45$",
      discount: "1$",
      single_price: 1,
      creditor: "لا",
      agent: "علي",
      description: "ubs1",
      quantity: 5,
      category: "هواتف",
      product_name: "شاحن",
      product_id: 1567,
      user_name: "ali",
      time: "12:35",
    },
  ];

  const [selectionModel, setSelectionModel] = useState([]);
  const [sales, setSales] = useState(true);
  const [creditor, setCreditor] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };
  const search = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="fixed  top-bar bg-greyBar h-14 py-2 w-3/4  rounded-lg flex items-center  justify-end font-bold top-28  right-44 text-white ">
        <form onSubmit={search}>
          <button
            type="submit"
            className="bg-secondary mr-4 py-2 px-2   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-24   "
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            بحث
          </button>
          <div className="bg-secondary mx-3 p-2  text-xs rounded-lg inline-flex justify-center items-center w-20">
            <label htmlFor="isCreditor" className="mr-1">
              دائن
            </label>
            <input type="checkbox" name="isCreditor" id="isCreditor" />
          </div>
          <input
            type="date"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
          />
          <input
            type="number"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="رقم المنتج"
          />
          <input
            type="text"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="الاسم"
          />
        </form>
      </div>
      <main className="fixed   w-[80%] h-full flex flex-col items-end  overflow-y-auto overflow-x-hidden    top-40  right-44 text-white font-bold">
        <div
          className={`sales w-full ${
            sales && "h-1/2"
          } mt-4 flex flex-col items-center  `}
        >
          <div
            className="title w-1/2 mb-1 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
            onClick={() => {
              setSales(!sales);
              setExpenses(false);
              setCreditor(false);
            }}
          >
            <p>المبيعات</p>
          </div>

          {sales && (
            <div className="w-full h-full ">
              <DataGrid
                rows={rows}
                columns={salesColumns}
                pageSize={5}
                rowsPerPageOptions={[15, 25, 50]}
                rowHeight={40}
                checkboxSelection={false}
                selectionModel={selectionModel}
                onSelectionModelChange={handleSelectionModelChange}
                sx={{
                  boxShadow: 1,
                  fontSize: 14,
                }}
              />
            </div>
          )}
        </div>

        <div
          className={`creditor w-full ${
            creditor && "h-1/2"
          }    mt-5 flex flex-col items-center  `}
        >
          <div
            className="title w-1/2 mb-1 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
            onClick={() => {
              setSales(false);
              setExpenses(false);
              setCreditor(!creditor);
            }}
          >
            <p>دفع دائن</p>
          </div>

          {creditor && (
            <div className="w-auto  h-full ">
              <DataGrid
                rows={rows}
                columns={creditorColumns}
                pageSize={5}
                rowsPerPageOptions={[15, 25, 50]}
                rowHeight={40}
                checkboxSelection={false}
                selectionModel={selectionModel}
                onSelectionModelChange={handleSelectionModelChange}
                sx={{
                  boxShadow: 1,
                  fontSize: 14,
                }}
              />
            </div>
          )}
        </div>

        <div
          className={`expenses w-full ${
            expenses && "h-1/2"
          }   mt-5 flex flex-col items-center  `}
        >
          <div
            className="title w-1/2 mb-1 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
            onClick={() => {
              setSales(false);
              setExpenses(!expenses);
              setCreditor(false);
            }}
          >
            <p>المصاريف</p>
          </div>
          {expenses && (
            <div className="w-auto h-full ">
              <DataGrid
                rows={rows}
                columns={expensesColumns}
                pageSize={5}
                rowsPerPageOptions={[15, 25, 50]}
                rowHeight={40}
                checkboxSelection={false}
                selectionModel={selectionModel}
                onSelectionModelChange={handleSelectionModelChange}
                sx={{
                  boxShadow: 1,
                  fontSize: 14,
                }}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Records;
