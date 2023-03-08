import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Daily from "./pages/Daily/Daily";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Login />} /> 
      <Route path={"/login"} element={<Login />} /> 
      <Route path={"/dashboard"} element={<Dashboard />} /> 
      <Route path={"/daily"} element={<Daily  />} /> 

    </Routes>
  </BrowserRouter>
  );
}

export default App;
