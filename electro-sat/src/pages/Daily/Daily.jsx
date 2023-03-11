import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import userImg from "../../assets/images/userImg.png";
import SideBar from "../../components/SideBar/SideBar";
import { DataGrid } from "@mui/x-data-grid";

function Daily() {
  const columns = [
    { field: "id", headerName: "ID", width: 5, editable: false },
    {
      field: "paid_rest_usd",
      headerName: "المدفوع/الباقي USD ",
      width: 100,
      editable: true,
    },
    {
      field: "paid_rest_lira",
      headerName: "المدفوع/الباقي L.L",
      width: 100,
      editable: true,
    },
    {
      field: "total_price",
      headerName: "الاجمالي",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "single_price",
      headerName: "الفردي",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "creditor",
      headerName: "دائن",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "agent",
      headerName: "العميل",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "الكميه",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "category",
      headerName: "اسم الصنف",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "product_name",
      headerName: "اسم المنتج",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "product_id",
      headerName: "رقم المنتج",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "user_name",
      headerName: "اسم المسخدم",
      type: "number",
      width: 50,
      editable: true,
    },
    {
      field: "time",
      headerName: "الوقت",
      type: "number",
      width: 50,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: "null", age: 100 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const [selectionModel, setSelectionModel] = useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  top-28  right-38 w-5/6  h-3/4 flex flex-col items-center  overflow-y-auto  ">
        <div className="top-bar bg-greyBar h-14 py-2 w-5/6  rounded-lg flex items-center  justify-end font-bold  ">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            صرف
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            دفع دائن
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            مبيع
          </button>
        </div>

        <div className="sales w-full h-80  mt-5 flex flex-col items-center  ">
          <div className="title w-1/2 mb-3 bg-secondary text-center  py-1 rounded-xl">
            <p>المبيعات</p>
          </div>

          <div className=" h-72 w-5/6 ">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[3, 5, 10]}
              checkboxSelection={false}
              selectionModel={selectionModel}
              onSelectionModelChange={handleSelectionModelChange}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Daily;
