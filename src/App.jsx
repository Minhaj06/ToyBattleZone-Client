import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
