import React from "react";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function EditShowtime() {
  return (
    <div>
      <div className="page-content">
        <Navbar />
        <div className="right-content">
          <div className="head">
            <div className="admin-menu">
              <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
              </div>
              <span className="menu-title">edit showtime</span>
            </div>
            <div className="profile-icon">
              <img src="../img/user-icon.png" alt="" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="input-row">
                <label>select movie :</label>
                <select value="" className="input-field">
                  <option value="">Select a Movie</option>
                </select>
              </div>
              <div className="input-row">
                <label>date :</label>
                <input type="date" className="input-field" />
              </div>
              <div className="input-row">
                <label>showtime :</label>
                <input type="time" className="input-field" />
              </div>
              <div className="crud-buttons">
                <button className="insert">Update Showtime</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
