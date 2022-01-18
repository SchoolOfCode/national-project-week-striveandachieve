import { useState } from "react";


function WeekDropDown() {
  const bootcampWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  const [week, setWeek] = useState(bootcampWeeks);


  
  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <form className="weekDropDown">
      <label>Weeks</label>
    
<select value={week} onChange={handleChange}>
    
      {week.map((oneWeek)=>{
return(


<option value={oneWeek}>{oneWeek}</option>

)

      })}
      
       </select>
        </form>
  
  );
}

export default WeekDropDown;
