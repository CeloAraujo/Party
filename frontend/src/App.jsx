import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/ReactToastify.css";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
