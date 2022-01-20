function Mood({ average }) {
  //setting class name for conditional formatting and converting mood to a word
  let moodClass = `mood${average}`;
  let mood = "";
  if (average === 1) {
    mood = "Good";
  } else if (average === 2) {
    mood = "Average";
  } else if (average === 3) {
    mood = "Bad";
  }
  //varying display depending on the value of the average mood
  console.log(average);
  if (average === 0) {
    return <></>;
  } else if (average === 1 || average === 2) {
    return (
      <div id="averageMood" className={moodClass}>
        Overall Mood for selected time is {mood}
      </div>
    );
  } else if (average === 3) {
    return (
      <div>
        <div id="averageMood" className={moodClass}>
          Overall Mood for selected time is {mood}
        </div>
        <ul>
          It looks like you might be struggling, consider trying one of the
          following:
          <li>
            Reach out to a coach; click to email for{" "}
            <a href="mailto:coaching@schoolofcode.co.uk">coaching</a>, or for{" "}
            <a href="mailto:welfare@schoolofcode.co.uk">welfare</a>
          </li>
          <li>Take a break</li>
          <li>Talk to fellow bootcampers</li>
          <li>
            Check out{" "}
            <a href="https://www.freemindfulness.org/">
              The Free Mindfulness Project
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Mood;
