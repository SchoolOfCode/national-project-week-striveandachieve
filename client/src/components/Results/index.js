import { useState } from "react";
import Dropdrown from "../Dropdown";
import Button from "../Button";

function Results() {
  const [week, setWeek] = useState("");

  function searchWeek(event) {
    setWeek(event.target.value);
  }
  function handleClick() {
    getResultByWeek(week);
  }

  async function getResultByWeek(week) {
    let response = await fetch(`/moods?week=${week}`);
    let data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h2>Search by week</h2>
      <Dropdrown onChange={searchWeek} option="[1-16]" />
      <Button buttonText="Submit" onClick={handleClick} />
    </div>
  );
}

export default Results;
