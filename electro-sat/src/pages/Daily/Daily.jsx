import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { creditorColumns, expensesColumns, rows, salesColumns } from "./data";
import PopUp from "../../components/PopUp/PopUp";

function Daily() {
  const [selling, setSelling] = useState(true);

  const [selectionModel, setSelectionModel] = useState([]);
  const [sales, setSales] = useState(true);
  const [creditor, setCreditor] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <>
      {selling && <PopUp selling={setSelling}></PopUp>}
      <main className="fixed   w-[80%] h-full flex flex-col items-end  overflow-y-auto overflow-x-hidden    top-28  right-44 text-white font-bold">
        <div className="top-bar bg-greyBar h-14 py-2 w-5/6  rounded-lg flex items-center  justify-end font-bold  ">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            صرف
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            دفع دائن
          </button>
          <button
            onClick={() => setSelling(true)}
            className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    "
          >
            مبيع
          </button>
        </div>

        <div
          className={`sales w-full ${
            sales && "h-1/2"
          } mt-5 flex flex-col items-center  `}
        >
          <div
            className="title w-1/2 mb-3 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
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
            className="title w-1/2 mb-3 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
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
            className="title w-1/2 mb-3 bg-secondary text-center  py-1 rounded-xl cursor-pointer hover:opacity-70"
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

export default Daily;
