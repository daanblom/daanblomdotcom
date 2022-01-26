import React from "react";
import ReactDOM from "react-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Top from "./Top";
import Footer from "./Footer";
import ShopHeader from "./ShopHeader";
import Scroll from "./Scroll";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Top />
      <ShopHeader />
      <Scroll />
      <Footer />
    </div>
  );
}

export default App;
