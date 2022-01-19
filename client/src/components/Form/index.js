
import "./index.css";
import DropDownList from "../Dropdown";
const bootcampWeeks ={ name:"Weeks", array:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]};
const bootcampDays ={ name:"Days", array:["Monday","Tuesday","Wednesday","Thursday","Friday"]};
const bootcampMood = { name:"Mood", array:[1,2,3,4,5]}


function Form() {
  
  return(
    <form className="formBox">
  <DropDownList arrayIn={bootcampWeeks}/>
  <DropDownList arrayIn={bootcampDays}/>
  <DropDownList arrayIn={bootcampMood}/>
</form>
  )}

export default Form;
