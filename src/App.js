import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./components/MainPage/mainpage";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
