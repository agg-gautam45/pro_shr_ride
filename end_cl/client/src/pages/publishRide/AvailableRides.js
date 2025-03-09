import React, { useEffect, useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

function RideCards() {
  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleBook = async (driverEmail) => {
    try {
      let data = localStorage.getItem("auth");
      data = JSON.parse(data);
      const { token } = data;

      const response = await axios.post(
        'https://delbil.onrender.com/api/v1/email/get_email',
        {},
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      const userEmail = response.data.email;

      emailjs.init("l0Dv3arHmgm8CiMUW");

      emailjs
        .send("service_p2t1228", "template_vdow3gg", {
          to_email: driverEmail,
          from_email: userEmail,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.error("FAILED...", error);
          }
        );
    } catch (error) {
      console.error("Error booking ride:", error);
    }
  };

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get("https://delbil.onrender.com/api/v1/publishRide/get_rides");
        setRides(response.data);
        setFilteredRides(response.data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRides();
  }, []);

  useEffect(() => {
    setFilteredRides(
      rides.filter(
        (ride) =>
          ride.source.toLowerCase().includes(source.toLowerCase()) &&
          ride.destination.toLowerCase().includes(destination.toLowerCase())
      )
    );
  }, [source, destination, rides]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col">
        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
            Filter
          </div>
          <ul className="w-full text-center text-sm">
            <li className="border-b py-4">
              <input
                className="outline-none"
                type="text"
                placeholder="Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </li>
            <li className="border-b py-4">
              <input
                className="outline-none"
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </li>
          </ul>
        </div>
      </div>
      {filteredRides.map((ride) => (
        <div
          key={ride._id}
          className="w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col"
        >
          <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">
              {ride.source} to {ride.destination}
            </div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">
                Arrival: {new Date(ride.arrival).toLocaleDateString()}
              </li>
              <li className="border-b py-4">Time: {ride.time}</li>
              <li className="border-b py-4">Passengers: {ride.passengers}</li>
            </ul>
            <div className="p-8">
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded"
                onClick={() => handleBook(ride.email)}
              >
                Book Ride
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RideCards;
