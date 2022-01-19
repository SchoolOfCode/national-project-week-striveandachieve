import React from "react";
import { useForm } from "react-hook-form";
//import "./index.css";

const API_URL = process.env.REACT_APP_API_URL;

function Results() {
  const { register, handleSubmit } = useForm();

  async function displayResultByWeek(selection) {
    const week = parseInt(selection.week);
    const response = await fetch(`${API_URL}/moods?week=${week}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit((data) => displayResultByWeek(data))}>
      <section className="dropDownBoxes">
        <select id="weekDropDown" {...register("week")}>
          <option value="">Select Week...</option>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5</option>
          <option value="6">Week 6</option>
          <option value="7">Week 7</option>
          <option value="8">Week 8</option>
          <option value="9">Week 9</option>
          <option value="10">Week 10</option>
          <option value="11">Week 11</option>
          <option value="12">Week 12</option>
          <option value="13">Week 13</option>
          <option value="14">Week 14</option>
          <option value="15">Week 15</option>
          <option value="16">Week 16</option>
        </select>
        <input type="submit" />
      </section>
    </form>
  );
}

export default Results;
