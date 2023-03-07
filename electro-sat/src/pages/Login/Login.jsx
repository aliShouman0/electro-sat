import React from "react"; 
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/transparent-logo.png";

function Login() {
  const navigate = useNavigate();

  const validate=(e)=>{
    console.log("sa")
    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-screen bg-primary flex flex-col justify-center items-center ">
      <div className="logo h-1/3 w-1/4">
        <img src={logo} alt="logo" />
      </div>
      <div className="form p-10  mt-10 text-center border border-secondary rounded-xl ">
        <div className="my-5 text-left">
          <input
            type="text"
            id="userName"
            className=" w-64 p-1 rounded-lg h-10 outline-none"
          />
          <label
            htmlFor="userName"
            className="ml-5  text-xl text-center text-white   "
          >
            الاسم
          </label>
        </div>

        <div className="my-5 text-left">
          <input
            type="password"
            id="password"
            className="w-64 p-1 rounded-lg h-10 outline-none"
          />
          <label
            htmlFor="password"
            className="ml-5  text-xl text-center text-white   "
          >
            كلمة المرور
          </label>
        </div>
        <button className="btn  mt-5 bg-secondary p-2 rounded-xl text-white text-xl font-bold w-full hover:opacity-80" onClick={validate}>تسجيل الدخول</button>
      </div>
    </div>
  );
}

export default Login;
