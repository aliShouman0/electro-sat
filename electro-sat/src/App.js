import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Daily from "./pages/Daily/Daily";
import Stock from "./pages/Stock/Stock";
import Expenses from "./pages/Expenses/Expenses";
import Category from "./pages/Category/Category";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Login />} /> 
      <Route path={"/login"} element={<Login />} /> 
      <Route path={"/dashboard"} element={<Dashboard />} /> 
      <Route path={"/daily"} element={<Daily  />} /> 
      <Route path={"/stock"} element={<Stock  />} /> 
      <Route path={"/expenses"} element={<Expenses  />} /> 
      <Route path={"/stock/category"} element={<Category  />} /> 


    </Routes>
  </BrowserRouter>
  );
}

export default App;
