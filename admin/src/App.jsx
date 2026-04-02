import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add.jsx";
import List from "./Pages/List/List.jsx";
import Order from "./Pages/Order/Order.jsx";

function App() {
  const url = "http://localhost:4080";

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
