import React, { Component } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Index from "./component/Index"
function App () {

    return (
      <div>
        <BrowserRouter> 
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        
      </div>
    )

  
}

export default App;
