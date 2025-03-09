import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const TravelInfo = () => {
  return (
    <>
      <div className="input-group my-3" style={{marginLeft:'9vw',width:'80vw'}}>
        <span className="input-group-text"></span>
        <input
          type="text"
          aria-label="Leaving from"
          placeholder="Leaving from"
          className="form-control"
          style={{height:'3.5vw'}}
        />
        <span className="input-group-text"></span>
        <input
          type="text"
          aria-label="Going to"
          placeholder="Going to"
          className="form-control"
        />
        <span className="input-group-text"></span>
        <button
          type="text"
          aria-label="Going to"
          className="form-control"
        />
        <span className="input-group-text"></span>
        <button
          type="text"
          aria-label="Going to"
          className="form-control"
        />
        <input className="btn btn-primary" type="submit" value="Search" style={{width:'7vw'}}/>
      </div>
    </>
  );
};

export default TravelInfo;