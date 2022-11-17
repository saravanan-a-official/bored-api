import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import DisplayIdea from "../components/DisplayIdea";
import { getAnIdea } from "../redux/action";
import "../styles/App.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Boring API</h1>
      You bored?{" "}
      <Button variant="primary" onClick={() => dispatch(getAnIdea())}>
        Get an idea!
      </Button>
      <DisplayIdea />
    </div>
  );
}

export default App;
