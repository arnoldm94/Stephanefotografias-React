import { useState } from "react";
import "../styles/sass/styles.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
