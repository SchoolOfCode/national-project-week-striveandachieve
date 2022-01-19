import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "./index.css";

import URL from "../App";

function Form2() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  // useEffect(() => {

  //   createNewDay({
  //     userid: 1,
  //     name: "Grace",
  //     week: parseInt(result.week),
  //     day: parseInt(result.day),
  //     mood: parseInt(result.mood),
  //     learned: result.learn,
  //     revise: result.revise,
  //     feeling: result.feeling,
  //   });
  // }, [result]);

  async function createNewDay(body) {
    console.log(body);
    const user = {
      userid: 1,
      name: "Grace",
      week: parseInt(body.week),
      day: parseInt(body.day),
      mood: parseInt(body.mood),
      learned: body.learn,
      revise: body.revise,
      feeling: body.feeling,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(`/moods`, requestOptions);
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit((data) => createNewDay(data))}>
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

        <select id="dayDropDown" {...register("day")}>
          <option value="">Select Day...</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
        </select>

        <select id="moodDropDown" {...register("mood")}>
          <option value="">Select Mood...</option>

          <option value="1">Good</option>
          <option value="2">Average</option>
          <option value="3">Bad</option>
        </select>
      </section>
      <section className="whatINeedTodo">
        <label>What Did I learn?</label>
        <input {...register("learn")} placeholder="......" />
        <label>What do I need to revise?</label>
        <input {...register("revise")} placeholder="...... " />
        <label>How am I Feeling ?</label>
        <input {...register("feeling")} placeholder="...... " />
      </section>

      <p>{result}</p>

      <input type="submit" />
    </form>
  );
}

export default Form2;
