import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomRow from "../../components/CustomRow/CustomRow";
import CustomTable from "../../components/CustomTable/CustomTable";

function Creditors() {
  const search = (e) => {
    e.preventDefault();
  };

  const createData = (
    name,
    paidLira,
    paidUsd,
    restLira,
    restUsd,
    totalLira,
    totalUsd
  ) => {
    return {
      name,
      paidLira,
      paidUsd,
      restLira,
      restUsd,
      totalLira,
      totalUsd,
      history: [
        {
          date: "2020-01-05",
          userName: "ali",
          productId: "123",
          category: "phone",
          product: "usb",
          amount: 3,
          totalLira: 145000,
          totalUsd: 138,
        },
        {
          date: "2020-01-05",
          userName: "ali",
          productId: "123",
          category: "phone",
          product: "usb",
          amount: 3,
          totalLira: 145000,
          totalUsd: 138,
        },
      ],
    };
  };

  const rows = [
    createData("ali", 159000, 16.0, 25000, 48.0, 45000, 13.9),
    createData("yoni", 259000, 6.0, 2435000, 1.0, 245000, 18.19),
    createData("mosa", 58000, 68.0, 15000, 2.0, 918000, 32.8),
    createData("mlak", 19000, 746.0, 29000, 3.0, 185000, 31.2),
    createData("yoni", 259000, 6.0, 2435000, 1.0, 245000, 18.19),
    createData("mosa", 58000, 68.0, 15000, 2.0, 918000, 32.8),
    createData("mlak", 19000, 746.0, 29000, 3.0, 185000, 31.2),
    createData("isaa", 959000, 38.0, 215000, 5.0, 15000, 13.91),
    createData("baker", 129000, 628.0, 2345000, 1.0, 345000, 2.99),
    createData("isaa", 959000, 38.0, 215000, 5.0, 15000, 13.91),
    createData("baker", 129000, 628.0, 2345000, 1.0, 345000, 2.99),
  ];
  const rowTitle = [
    "$ مجموع",
    "L.L مجموع",
    "$ الباقي",
    "L.L الباقي",
    "$ مدفوع",
    "L.L مدفوع",
    "الاسم",
  ];
  const rowValue = [
    "totalUsd",
    "totalLira",
    "restUsd",
    "restLira",
    "paidUsd",
    "paidLira",
    "name",
  ];
  const nestedRowTitle = [
    "$ مجموع",
    "L.L مجموع",
    "الكميه",
    "اسم المنتج",
    "اسم الصنف",
    "رقم المنتج	",
    "اسم المسخدم",
    "التاريح",
    "",
  ];
  const nestedRowValue = [
    "totalUsd",
    "totalLira",
    "amount",
    "product",
    "category",
    "productId",
    "userName",
    "date",
    "",
  ];
  const secondTableRowTitle = [
    "$ مجموع",
    "L.L مجموع",
    "اسم المسخدم",
    "التاريح",
  ];

  const secondTableRowValue = [
    [145000, 138, "ali", "2020-01-05"],
    [145000, 138, "ali", "2020-01-05"],
    [145000, 138, "ali", "2020-01-05"],
  ];

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

          <input
            type="date"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
          />

          <input
            type="number"
            className="bg-secondary mr-4 py-2 px-2   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="رقم الهاتف"
          />
          <input
            type="text"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="الاسم"
          />
        </form>
      </div>

      <main className="fixed   w-[80%] h-2/3 flex flex-col items-end  overflow-y-auto overflow-x-hidden    top-44  right-44 text-white font-bold">
        <div className="w-full h-3/4 my-5">
          <CustomTable
            rowTitle={rowTitle}
            rows={rows}
            rowValue={rowValue}
            nestedTableTitle={"المشتريات"}
            nestedRowTitle={nestedRowTitle}
            nestedRowValue={nestedRowValue}
            secondTable={"الدفعات"}
            secondTableRowTitle={secondTableRowTitle}
            secondTableRowValue={secondTableRowValue}
          />
        </div>
      </main>
    </>
  );
}

export default Creditors;
