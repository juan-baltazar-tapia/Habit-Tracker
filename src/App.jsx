import "./App.css";
import { useEffect, useState } from "react";
import HabitTracker from "./components/HabitTracker";
import data from "./data.json";

function App() {
  const [selectedHabit, setSelectedHabit] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [currentHabitYears, setCurrentHabitYears] = useState([]);

  const handleHabitChange = (event) => {
    const selectedHabit = event.target.value;
    setSelectedHabit(selectedHabit);
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const habits = Object.keys(data);


  useEffect(() => {
    if (selectedHabit) {
      const years = Object.keys(data[selectedHabit]);
      setCurrentHabitYears(years)
     
    }
  }, [selectedHabit]);

  return (
    <>
      <h1>Habit Tracker</h1>
      <div>
        <label htmlFor="habitSelect">Select Habit:</label>
        <select
          id="habitSelect"
          value={selectedHabit}
          onChange={handleHabitChange}
        >
          <option value="">Choose a habit</option>
          {habits.map((habit) => (
            <option key={habit} value={habit}>
              {habit}
            </option>
          ))}
        </select>
        <label htmlFor="habitSelect">Select Year:</label>

        <select
          id="yearSelect"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Select Year</option>
          {currentHabitYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {selectedHabit && selectedYear && <HabitTracker habit={selectedHabit} year ={selectedYear}/>}
    </>
  );
}

export default App;
