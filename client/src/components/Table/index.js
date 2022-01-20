import Row from "../Row";

import "./index.css";

export default function Table({ display }) {
  //if not data is fetched then nothing is displayed
  if (display[0]) {
    return (
      <table>
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
          {/* mapping through each line of the database */}
          {display.map((day, index) => {
            return <Row key={index} text={day} />;
          })}
        </tbody>
      </table>
    );
  }
  return <></>;
}
