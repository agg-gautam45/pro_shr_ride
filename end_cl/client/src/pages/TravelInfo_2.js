import React from "react";

const TravelInfo_2 = (props) => {
  return (
    <>
      <div
        className="lower-box"
        style={{
          backgroundColor: "rgb(18, 94, 121)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginTop: "1vw", color: "white", marginLeft: "15vw",fontWeight:"bold",fontSize:"1.1rem" }}>
          {props.heading}
        </h3>
        <div
          className="input-group my-3"
          style={{ display: "flex", width: "85vw", height: "5vw" }}
        >
          {/* <span className="input-group-text"></span> */}
          <input
            type="text"
            aria-label={`${props.box1}`}
            placeholder={`${props.box1}`}
            className="form-control"
            style={{
              marginLeft: "15vw",
              borderRadius: "1.1vw",
              width: "2vw",
              fontWeight:'bold'
            }}
          />
          <input
            type="text"
            aria-label={`${props.box2}`}
            placeholder={`${props.box2}`}
            className="form-control"
            style={{
              marginLeft: "1vw",
              borderRadius: "1.1vw",
              fontWeight:'bold'
            }}
          />
          <input
            type="text"
            aria-label={`${props.box3}`}
            placeholder={`${props.box3}`}
            className="form-control"
            style={{
              marginLeft: "1vw",
              borderRadius: "1.1vw",
              fontWeight:'bold'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TravelInfo_2;