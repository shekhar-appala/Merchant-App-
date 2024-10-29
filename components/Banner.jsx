/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./Navbar";

function Banner() {
   
  return (
    <div>
      <div className="banner">
        <img className="banner-bg" alt="/" src="/Banner_bg.png" />
        <Navbar/>
<div className="text-center mb-4"><img className="banner-img" alt="/" src="/Banner_young_man.png" /></div>
        
      </div>
    </div>
  );
}

export default Banner;
