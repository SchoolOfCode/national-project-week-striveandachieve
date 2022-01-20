import "./App.css";
import Header from "../Header";
import Form from "../Form";
import Results from "../Results";
import UserNameField from "../UserName";

function App() {
  return (
    <div className="App">
  
      <Header />
      <UserNameField/>
      <Form />
      <Results />
    </div>
  );
}

export default App;
