import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<Home />}/>
    <Route path="/about" element = {<About />}/>
    <Route path="/Users" element = {<Users />}/>
    <Route path="/Contact" element = {<Contact />}/>
    </Routes>
  </BrowserRouter>
  </GlobalProvider>
  );
};

export default App;