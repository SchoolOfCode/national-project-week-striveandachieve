import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const API_URL = process.env.REACT_APP_API_URL;

function Form2() {
  const { register, handleSubmit, resetField } = useForm();

  async function createNewDay(body) {
    console.log(body);
    resetField('week');
    resetField('day');
    resetField('mood');
    resetField('learn');
    resetField('revise');
    resetField('feeling');
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
    const response = await fetch(`${API_URL}/moods`, requestOptions);
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit((data) => createNewDay(data))}>
      <section className="dropDownBoxes">
        <select id="weekDropDown" {...register("week", { required: true })}>
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

        <select id="dayDropDown" {...register("day", { required: true })}>
          <option value="">Select Day...</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
        </select>

        <select id="moodDropDown" {...register("mood", { required: true })}>
          <option value="">Select Mood...</option>

          <option value="1">Good</option>
          <option value="2">Average</option>
          <option value="3">Bad</option>
        </select>
      </section>
      <section className="whatINeedTodo">
        <div className="learning">
          <label id="whatlearn" className="label">
            What Did I learn?
          </label>

          <input
            className="inputbox"
            {...register("learn", { required: true })}
            placeholder="......"
          />
        </div>
        <div className="learning" id="revisebox">
          <label className="label">What do I need to revise?</label>
          <input
            className="inputbox"
            {...register("revise", { required: true })}
            placeholder="...... "
          />
        </div>
        <div className="learning">
          <label className="label">How am I Feeling?</label>
          <input
            className="inputbox"
            {...register("feeling", { required: true })}
            placeholder="...... "
          />
        </div>

        <input className="button" type="submit" />
      </section>
    </form>
  );
}

export default Form2;
