//converting mood number into string for frontend display.  Using mood number to set a class for conditional formatting
function Row({ text }) {
  let moodClass = `mood${text.mood}`;
  let mood = "";
  if (text.mood === 1) {
    mood = "Bad";
  } else if (text.mood === 2) {
    mood = "Not good";
  } else if (text.mood === 3) {
    mood = "Okay";
  } else if (text.mood === 4) {
    mood = "Pretty good";
  } else if (text.mood === 5) {
    mood = "Great";
  }

  return (
    <tr>
      <td>{text.week}</td>
      <td>{text.day}</td>
      <td className={moodClass}>{mood}</td>
      <td>{text.feeling}</td>
      <td>{text.learned}</td>
      <td>{text.revise}</td>
    </tr>
  );
}

export default Row;
