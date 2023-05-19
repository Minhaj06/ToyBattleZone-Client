import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
