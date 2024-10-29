/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import React from "react";

function medialibraries() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <img alt="/" src="/media.png" />
        <h3>Media Library</h3>
      </div>
      <div className="meadiMenu">
        <div>
          <img alt="/" src="festival.png" />
          <p>Festivals</p>
        </div>
        <div>
          <img alt="/" src="SpecialDays.jpg" />
          <p>Special Days</p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="festival">
          <div className="label">
            <img alt="/" src="sidelabel.png" />
            <p>Festivals</p>
          </div>
          <div className="d-flex festivalIn">
            <div className="text-center">
              <img alt="/" src="Krishna.png" />
              <p>Krishna Janmashtami</p>
            </div>
            <div className="text-center">
              <img alt="/" src="ganesh.png" />
              <p>Ganesh chathurthi</p>
            </div>
            <div className="text-center">
              <img alt="/" src="onam.png" />
              <p>Onam</p>
            </div>
          </div>

          <div className="m-4 text-center">
            <a href="/festivals"><button className="viewmore">&gt;</button> <br />
            <p>View More</p></a>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="festival">
          <div className="label">
            <img alt="/" src="sidelabel.png" />
            <p>Specials</p>
          </div>
          <div className="d-flex festivalIn">
            <div className="text-center">
              <img alt="/" src="Engineer.png" />
              <p>Engineer’s</p>
            </div>
            <div className="text-center">
              <img alt="/" src="Gandhi.png" />
              <p>Gandhi Jayanti</p>
            </div>
            <div className="text-center">
              <img alt="/" src="Maharaja.png" />
              <p>Maharaja Agrasen Jayanti</p>
            </div>
          </div>

          <div className="m-4 text-center">
            <button className="viewmore">&gt;</button> <br />
            <a>View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default medialibraries;
