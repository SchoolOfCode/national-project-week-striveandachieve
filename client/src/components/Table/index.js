import Row from "../Row";
import "./index.css";

export default function Table({ display }) {
  if (display[0]) {
    return <table>
    <thead>
      <tr>
        <th>Week</th>
        <th>Day</th>
        <th>Mood</th>
        <th>Feeling</th>
        <th>Topics learned</th>
        <th>Topics to revise</th>
      </tr>
      </thead>
      <tbody>
        {display.map((day, index) => {
          return <Row key={index} text={day} />;
        })}
      </tbody>
    </table>;
  }
  return <p>Search for results by week</p>;
}
