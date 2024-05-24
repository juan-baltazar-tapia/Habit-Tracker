import React, { useState } from "react";
import "./HabitTracker.css";
import data from "../data.json";

const HabitTracker = ({ habit, year }) => {
  // Generate an array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container">
      {months.map((month, index) => {
        const currentMonthDays = data[habit][year][index.toString()];
        return (
          <div key={index} className="monthRow">
            <div className="month">{month}</div>
            <div className="daysContainer">
              {currentMonthDays.map((day, index) => {
                return (
                  <div
                    key={index}
                    className={`box ${day === 1 ? "completed" : "incomplete"}`}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitTracker;
