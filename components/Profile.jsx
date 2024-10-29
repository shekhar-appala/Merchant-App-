/* eslint-disable @next/next/no-img-element */
import React from "react";

function Profile() {
  return (
    <div className="container">
      <div className="details container">
        <div className="d-flex">
          <div>
            <img src="./Frame.svg" alt="/" />
          </div>
          <div>
            <h5>
              <b>1 New Lead</b>
            </h5>
            <p>
              <b>Name</b> : Mani kanta
              <br />
              <b>Mobile</b> : 9988776655 <br />
              <b>Email</b> : Mani@gmail.com
              <br />
            </p>
          </div>
        </div>
        <div className="d-flex ">
          <button className="open_button">OPEN</button>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <div className="assign">
          <div className="assign1">
            {" "}
            <h5>
              ASSIGN LEADS <br />2
            </h5>
          </div>
        </div>
        <div className="today">
          <div className="today1">
            <h5>
              TODAY LEADS <br />0
            </h5>
          </div>
        </div>
      </div>

      <div className="package container py-4 mb-5">
        <div className="package-top">
          <div>
            <img className="wallet" alt="/" src="/wallet.png" />
          </div>
          <div>
            <h5>
              <b> PACKAGE </b>
              <br />
              EXPIRY DATE
            </h5>
            <h6>25 SEPTEMBER 2025</h6>
          </div>
          <div>
            <img alt="/" src="/pay_button.png" />
          </div>
        </div>
        <div className="package-bottom pt-4">
          <img className="circuit" alt="/" src="/circuit.png" />
          <div className="w-100 ps-1">
            <p>300 DAYS LEFT</p>
            <img className="w-100" alt="/" src="/range.png" />
          </div>
        </div>
      </div>

      <div className="menu text-center">
        <div className="d-flex justify-content-around mb-3">
          <div>
            <img alt="/" src="/business.png" />
            <p>Business Profile</p>
          </div>
          <div>
            <img alt="/" src="/manage.png" />
            <p>Plans</p>
          </div>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <div>
            <img alt="/" src="/accounts.png" />
            <p>Accounts</p>
          </div>
          <div>
            <img alt="/" src="/leads.png" />
            <p>Leads</p>
          </div>
          <div>
            {" "}
            <img alt="/" src="/contact.png" />
            <p>Contact Us</p>
          </div>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <div>
            {" "}
            <img alt="/" src="/manage.png" />
            <p>Manage Specification</p>
          </div>
          <div>
            <img alt="/" src="/faq.png" />
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <div className="graph ">
        <img className="w-100" alt="/" src="./graph.png" />

        <div className=" mt-4 d-flex align-items-center justify-content-center">
          <p>Total Update</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p>Total Leads</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
