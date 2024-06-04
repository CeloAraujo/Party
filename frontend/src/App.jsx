import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
