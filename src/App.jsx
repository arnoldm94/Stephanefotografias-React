import { useState } from "react";
import "../styles/sass/styles.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
