import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

function Message(props) {
  const [textbox, setTextbox] = React.useState("");
  const handleClick = (e) => {
    
  };
  return (
    <div className="messageRow">
      <form>
        <div className="messageBox">
          <textarea
            id={props.id}
            rows="2"
            defaultValue=""
            className="birthdayMessage"
            onChange={(e) => setTextbox(e.target.value)}
          />
        </div>
        <div>
          <button
            type="reset"
            className={textbox === "" ? "clearIconOff" : "clearIcon"}
            onClick={() => setTextbox("")}
          >
            <FontAwesomeIcon color="black" icon={faTimesCircle} />
          </button>
          <button className={textbox === "" ? "editButtonOff" : "editButton"}>
            <FontAwesomeIcon color="white" icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Message;
