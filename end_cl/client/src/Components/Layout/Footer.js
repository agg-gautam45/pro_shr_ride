import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "27vw",
            marginTop: "2vw",
          }}
        >
          <h5 style={{ color: "rgb(18, 94, 121)" }}>
            How to Travel with <br />
            CommuteShare
          </h5>
          <div style={{marginTop:'1vw'}}>
            <p><a href="#" className="footer-text">All carpool routes</a></p>
            <p><a href="#" className="footer-text">All carpool destinations</a></p>
            <p><a href="#" className="footer-text">All bus routes</a></p>
            <p><a href="#" className="footer-text">All bus destinations</a></p>
          </div>
        </div>

        <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20vw",
            marginTop: "2vw",
          }}
        >
          <h5 style={{ color: "rgb(18, 94, 121)" }}>
            About
          </h5>
          <div style={{marginTop:'2vw'}}>
            <p><a href="#" className="footer-text">How it Works</a></p>
            <p><a href="#" className="footer-text">About Us</a></p>
            <p><a href="#" className="footer-text">Help Centre</a></p>
            <p><a href="#" className="footer-text">Press</a></p>
          </div>
        </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "4vw",
        }}
      >
        <a href="#" style={{ marginLeft: "17vw", color: "gray" }}>
          Terms and Conditions
        </a>
        <p style={{ marginLeft: "40vw", marginTop: "1vw", color: "grey" }}>
          Delbil, 2024
        </p>
        <i
          style={{ marginTop: "0.2vw", marginLeft: "0.5vw" }}
          className="fa-regular fa-copyright"
        ></i>
      </div>
    </>
  );
};

export default Footer;