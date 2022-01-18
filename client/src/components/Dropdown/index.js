import { useState } from "react";


function DropDownList({arrayIn}) {
  
  
  const [arrayItem, setArrayItem] = useState([]);


  
  const handleChange = (e) => {
    setArrayItem(e.target.value);
    console.log(arrayItem)
  };

  return (
    <form className="DropDownFrom">
      <label>{arrayIn.name}</label>
    
<select value={arrayItem} onChange={handleChange}>
    
      {arrayIn.array.map((item)=>{
return(


<option key={item} value={item}>{item}</option>

)

      })}
      
       </select>
        </form>
  
  );
}

export default DropDownList;
