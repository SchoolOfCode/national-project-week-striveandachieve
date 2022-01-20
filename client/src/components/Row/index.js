//converting mood number into string for frontend display.  Using mood number to set a class for conditional formatting
function Row({ text }) {
  let moodClass = `mood${text.mood}`;
  let mood = "";
  if (text.mood === 1) {
    mood = "Good";
  } else if (text.mood === 2) {
    mood = "Average";
  } else if (text.mood === 3) {
    mood = "Bad";
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
