import React, { Component } from "react";
import About from "./../About";
import Home from "./../Hom";
import Footer from "./../Footer";
import Portoflio from "./../Portofolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";
function Index () {

    return (
      <div>
        <Home />
        <Work />
        <Portoflio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
        
      </div>
    )

  
}

export default Index;
