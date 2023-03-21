import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Daily from "./pages/Daily/Daily";
import Stock from "./pages/Stock/Stock";
import Expenses from "./pages/Expenses/Expenses";
import Category from "./pages/Category/Category";
import Creditors from "./pages/Creditors/Creditors";
import Layout from "./Layout/Layout";
import Records from "./pages/Records/Records";
import HR from "./pages/HR/HR";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path={"/dashboard"}
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path={"/daily"}
            element={
              <Layout>
                <Daily />
              </Layout>
            }
          />
          <Route
            path={"/stock"}
            element={
              <Layout>
                <Stock />
              </Layout>
            }
          />
          <Route
            path={"/expenses"}
            element={
              <Layout>
                <Expenses />
              </Layout>
            }
          />
          <Route
            path={"/stock/category"}
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
          <Route
            path={"/creditors"}
            element={
              <Layout>
                <Creditors />
              </Layout>
            }
          />
          <Route
            path={"/records"}
            element={
              <Layout>
                <Records />
              </Layout>
            }
          />
          <Route
            path={"/hr"}
            element={
              <Layout>
                <HR />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
