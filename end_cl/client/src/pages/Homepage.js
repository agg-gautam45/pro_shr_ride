import React from "react";
import TravelInfo from "./TravelInfo_1";
import TravelInfo_2 from "./TravelInfo_2";

const HomePage = () => {
  return (
    <>
      <div>
        <img
          className="image-height"
          src="	https://cdn.blablacar.com/kairos/assets/images/carpool_blablabus_large-e3d8eff32c13cdafc080.svg"
          alt="..."
        />
      </div>
      <TravelInfo />
      <div
        className="container"
        style={{ display: "flex",justifyContent:"space-evenly", marginTop: "5vw" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <i className="fa-sharp fa-solid fa-coins fa-2xl"></i>
          <strong
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginTop: "1.5vw",
            }}
          >
            Your pick of rides at low prices
          </strong>
          <p
            style={{
              color: "black",
              marginTop: "0.3vw",
              fontSize:"1rem"
            }}
          >
            "PocketRide" - Your go-to for affordable rides. <br />
            With PocketRide, you can easily find and book <br />
            rides at low prices, making commuting convenient <br />
            and budget-friendly.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <i
            className="fa-solid fa-check fa-2xl"
            style={{ marginLeft: "4vw" }}
          ></i>
          <strong
            style={{
              marginLeft: "4vw",
              fontSize: "1.2rem",
              color: "black",
              marginTop: "1.5vw",
            }}
          >
            Trust who you travel with
          </strong>
          <p
            style={{
              marginLeft: "4vw",
              color: "black",
              marginTop: "0.3vw",
              fontSize:"1rem"
            }}
          >
            "TrustWheels" - Your trusted companion for <br />
            safe and reliable ridesharing. TrustWheels ensures <br />
            peace of mind by connecting you with trustworthy <br />
            drivers, so you can travel with confidence knowing
            <br />
            you're in good hands.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <i
            className="fa-sharp fa-solid fa-bolt-lightning fa-2xl"
            style={{ marginLeft: "4vw" }}
          ></i>
          <strong
            style={{
              marginLeft: "4vw",
              fontSize: "1.2rem",
              color: "black",
              marginTop: "1.5vw",
            }}
          >
            Scroll, click, tap and go!
          </strong>
          <p
            style={{
              marginLeft: "4vw",
              color: "black",
              marginTop: "0.3vw",
              fontSize:"1rem"
            }}
          >
            "QuickRide" - Simplifying your journey from <br/>start to finish. With
            QuickRide, just scroll, click, <br/>tap, and you're on your way!
            Effortlessly find rides, <br/>book them with a tap, and get going in no
            time.
          </p>
        </div>
      </div>
      <div
        className="middle-box"
        style={{ backgroundColor: "rgb(18, 94, 121)", marginTop: "6vw" }}
      >
        <img
          src="	https://cdn.blablacar.com/kairos/assets/images/scamDetective-653544b71d88f51797db.svg"
          style={{ marginLeft: "10vw" }}
        />
        <div>
          <h2 style={{ marginTop: "6vw",marginBottom:"1vh", color: "white",fontSize:"1.4rem" }}>
            Help us keep you safe from scams
          </h2>
          <p style={{ color: "white",marginBottom:"1vh",fontSize:"1rem" }}>
            "At <strong>CommuteShare</strong>, safety is our top priority. While
            we strive to ensure the security <br />
            of our platform, we recognize the importance of being prepared for
            potential <br />
            scams. That's why we provide you with tips on how to avoid and
            report fraudulent <br />
            activities. By following our guidelines, you can help us keep you
            safe while using our services."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-1"
            style={{
              marginLeft: "11vw",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div
        className="middle-box"
        style={{ backgroundColor: "white", marginTop: "2vw" }}
      >
        <div>
          <h2
            style={{
              marginTop: "6vw",
              color: "black",
              marginLeft: "14vw",
              fontSize:"1.3rem"
            }}
          >
            Receive €25 in Carpool Bonus!
          </h2>
          <p
            style={{
              color: "black",
              marginLeft: "14vw",
              fontSize:"1.1rem"
            }}
          >
            "Attention, drivers! Your good habits are paying off with the
            Carpool Bonus.
            Enjoy rewards for carpooling and discover the eligibility conditions
            today."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-2"
            style={{
              marginLeft: "25vw",
            }}
          >
            Learn More
          </button>
        </div>
        <img
          src="https://cdn.blablacar.com/kairos/assets/images/driver-c3bdd70e6a29c6af9ef1.svg"
          style={{ marginLeft: "6vw" }}
        />
      </div>
      <TravelInfo_2
        heading="Where do you want a ride to?"
        box1="London -> Manchester"
        box2="Manchester -> London"
        box3="Birmingham -> London"
      />
      <div style={{ display: "flex", marginTop: "2vw", marginBottom: "2vw" }}>
        <img
          className="image-height-2"
          src="https://t4.ftcdn.net/jpg/00/73/46/07/360_F_73460710_VdNZ2ULA7bb2g0soKD6vaEfqrZuVmSr7.jpg"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              color: "black",
              marginLeft: "2vw",
              marginTop: "2vw",
              fontSize:"1.2rem"
            }}
          >
            Discover new cities at small prices <br />
            with CommuteShare buses.
          </h3>
          <p
            style={{
              marginLeft: "2vw",
              color: "black",
              marginTop:"1.1vh",
              marginBottom:"1.2vh"
            }}
          >
            "Whether it's a weekly reunion with a loved one or a monthly
            adventure <br />
            to a new European destination, Carpool buses offer convenient travel
            for <br />
            every occasion. With spacious accommodations for big families and
            ample <br />
            luggage space, our service ensures a hassle-free journey to iconic
            cities like Paris, <br />
            Amsterdam, and beyond."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-2"
            style={{
              marginLeft: "8vw",
              marginRight: "6vw",
              fontWeight: "bold",
              fontSize:"1.2rem"
            }}
          >
            Discover the Carpool Bus experience
          </button>
        </div>
      </div>
      <TravelInfo_2
        heading="Our top bus destinations"
        box1="Bus Brussels -> Paris"
        box2="Bus Amsterdam -> Paris"
        box3="Bus Paris -> Barcelona"
      />
    </>
  );
};

export default HomePage;