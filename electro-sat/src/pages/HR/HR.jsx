import {
  faCircleExclamation,
  faDiagnoses,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

function HR() {
  const [superAdmin, setSuperAdmin] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);

  const creditorColumns = [
    {
      field: "notes",
      headerName: "ملاحظه",
      type: "string",
      width: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rate",
      headerName: "تقييم",
      type: "string",
      width: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phoneNumber",
      headerName: "رقم الهاتف",
      type: "string",
      width: 100,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "اسم",
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
      notes: "great",
      rate: "3.5",
      phoneNumber: "7864387",
      name: "issaa",
    },
    {
      id: 2,
      notes: "great",
      rate: "3.5",
      phoneNumber: "8741924",
      name: "mosa",
    },
    {
      id: 3,
      notes: "great",
      rate: "4.5",
      phoneNumber: "18545480",
      name: "yzan",
    },
    {
      id: 4,
      notes: "great",
      rate: "3.5",
      phoneNumber: "71993980",
      name: "moh",
    },
  ];
  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };
  return (
    <>
      <main className="fixed  w-[80%] h-3/4 overflow-y-auto overflow-x-hidden    top-28  right-44 flex flex-col items-end">
        <div className="top-bar bg-greyBar h-14 py-2 w-5/6  rounded-lg flex items-center  justify-end font-bold  mb-3 text-white">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            الموردون
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            العملاء
          </button>
          {superAdmin && (
            <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
              المستخدمين
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="lg"
                className="ml-2"
              />
            </button>
          )}
        </div>

        <div
          className={`creditor w-full  h-3/4 mt-5 flex flex-col items-center  `}
        >
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
        </div>
      </main>
    </>
  );
}

export default HR;
