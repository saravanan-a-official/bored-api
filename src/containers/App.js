import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import DisplayIdea from "../components/DisplayIdea";
import { getAnIdea } from "../redux/action";
import "../styles/App.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Boring API</h1>
      You bored? Get an idea&nbsp;
      <Button variant="contained" onClick={() => dispatch(getAnIdea())}>
        here!
      </Button>
      <DisplayIdea />
    </div>
  );
}

export default App;
