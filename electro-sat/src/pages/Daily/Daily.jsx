import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import userImg from "../../assets/images/userImg.png";
import SideBar from "../../components/SideBar/SideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGrid } from "@mui/data-grid";

function Daily() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [selectionModel, setSelectionModel] = useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      {/* <main className="fixed top-28 w-full  h-5/6 m-2 flex  flex-col items-center       overflow-y-auto  "> */}
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
              checkboxSelection
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
