import "./App.css";
import PickUp from "./pages/publishRide/Pick.js";
import DropOff from "./pages/publishRide/Drop";
import RideContext from "./Contexts/RideContext.js";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import axios from "axios";
import DateTimePassengers from "./pages/publishRide/dateTimePassengers.js";
import PublishHome from "./pages/publishRide/publishHome.js";
import Homepage from "./pages/Homepage.js";
import { useState } from "react";
import Layout from "./Components/Layout/Layout.js";
import { UserContextProvider } from "./Contexts/UserContext.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AvailableRides from "./pages/publishRide/AvailableRides.js";


axios.defaults.withCredentials = true;

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [ride, setRide] = useState({
    source: "",
    destination: "",
    arrival: "",
    time: "",
    passenger: "",
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="available-rides" element={<AvailableRides/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/publishHome" element={<PublishHome />} />
          <Route path="*" element={
            <RideContext.Provider value={{ ride, setRide }}>
            <Routes>
              <Route path="/pick" element={<PickUp />} />
              <Route path="/drop" element={<DropOff />} />
              <Route path="/date-time" element={<DateTimePassengers />} />
            </Routes>
          </RideContext.Provider>
        }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;


