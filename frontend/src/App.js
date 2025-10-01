import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("http://localhost:8081/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return <div className="App"></div>;
}
export default App;
