import { useState } from "react";
import "../styles/sass/styles.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
