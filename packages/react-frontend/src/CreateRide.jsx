import React from 'react';
import './CreateRide.css';

function CreateRide() {
  return (
    <div className="create-ride-container">
      <div className="create-ride-card">
        <div className="create-ride-header">
          <h2>Create A Ride</h2>
          <span className="close-btn">×</span>
        </div>

        <form className="create-ride-form">
          <div className="form-row">
            <input type="text" placeholder="Preferred Pickup Location" />
            <input type="text" placeholder="Destination" />
          </div>

          <div className="form-row">
            <input type="date" />
            <input type="time" />
          </div>

          <input
            className="full-width"
            type="number"
            placeholder="Cost per seat"
          />

          <input
            className="full-width"
            type="number"
            placeholder="Number of seats"
          />

          <input
            className="full-width"
            type="number"
            placeholder="Max Deviation Time (minutes)"
          />

          <input className="full-width" type="text" placeholder="Car Model" />

          <textarea
            className="full-width"
            placeholder="Ride Description"
            rows="4"
          />

          <button className="create-button">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRide;
