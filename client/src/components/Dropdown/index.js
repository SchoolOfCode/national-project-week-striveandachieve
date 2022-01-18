import { useState } from "react";

function WeekDropDown() {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [week, setWeek] = useState(1);

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <form className="weekDropDown">
      <label>Weeks</label>
      {weeks.map((week) => {
        <option value={week}>{week}</option>;
      })}
    </form>
  );
}

export default WeekDropDown;
