import { CircularProgress } from "@mui/material";
import { Alert, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as CommonConstants from "../common/commonConstants";

function DisplayIdea() {
  const randomIdea = useSelector((state) => state);
  return (
    <div className="ideaboard">
      {randomIdea.loading === true &&
      randomIdea.randomIdea.key === undefined ? (
        <CircularProgress color="inherit" />
      ) : (
        <p></p>
      )}
      {randomIdea.loading === false &&
      randomIdea.randomIdea.key !== undefined ? (
        <>
          <h2>
            <Badge bg="secondary">Type</Badge>&nbsp;
            {CommonConstants.capitalizeFirstLetter(randomIdea.randomIdea.type)}
          </h2>
          <h2>
            <Alert variant="success">
              <b>{/*  <Badge bg="secondary">Idea</Badge> */}</b>
              &nbsp;&nbsp;
              <img
                alt="Here is your idea"
                src="/idea.webp"
                class="MuiAvatar-img "
                height="40"
                width="40"
              />
              &nbsp;&nbsp;"{randomIdea.randomIdea.activity}"
            </Alert>
          </h2>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default DisplayIdea;
