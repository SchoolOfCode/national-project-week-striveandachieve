import "./App.css";
import Header from "../Header";
import Form from "../Form";
import Results from "../Results";

export const URL = "http://localhost:3000";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <Header />
      <Form />
      {/* <Results /> */}
    </div>
  );
}

export default App;
