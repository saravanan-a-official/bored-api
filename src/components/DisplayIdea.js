import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function DisplayIdea() {
  const randomIdea = useSelector((state) => state);
  return (
    <div className="ideaboard">
      {randomIdea.loading === true &&
      randomIdea.randomIdea.key === undefined ? (
        <Spinner></Spinner>
      ) : (
        <p></p>
      )}
      {randomIdea.loading === false &&
      randomIdea.randomIdea.key !== undefined ? (
        <>
          <h1>Here is your random idea</h1>
          <h2>{randomIdea.randomIdea.type}</h2>
          <h2>{randomIdea.randomIdea.activity}</h2>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default DisplayIdea;
