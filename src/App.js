import React from "react";
import ReactDOM from "react-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Top from "./Top";
import Footer from "./Footer";
import ShopHeader from "./ShopHeader";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Top />
      <ShopHeader />
      <Footer />
    </div>
  );
}

export default App;
