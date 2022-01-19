import React from "react";
import   { useForm } from 'react-hook-form'
import { useState } from "react";

function Form2() {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
  
    return (
      <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
    <section className="dropDownBoxes">
     <select {...register("week")}>
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

        
        <select {...register("day")}>
          <option value="">Select Day...</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
       </select>

       <select {...register("mood")}>
          <option value="">Select Mood...</option>
      
          <option value="1">Good</option>
          <option value="2">Average</option>
          <option value="3">Bad</option>
         
       </select>
       </section>
       <section className="whatINeedTodo">
<label>What Did I learn?</label>
<input {...register("What did I learn")} placeholder="......" />
<label>What do I need to revise?</label>
 <input {...register("What do i need to revise ? ")} placeholder="...... " />
 <label>How am I Feeling ?</label>
 <input {...register("How am I Feeling ?")} placeholder="...... " />
 
       </section>
       
        <p>{result}</p>

        <input type="submit" />
      </form>
    );
  }
  

  export default Form2