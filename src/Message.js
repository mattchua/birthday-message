import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

function Message(props) {
  const [textbox, setTextbox] = React.useState("");

  return (
    <div className="messageRow">
      <form>
        <div className="messageBox">
          <textarea
            rows="2"
            defaultValue=""
            className="birthdayMessage"
            onChange={(e) => setTextbox(e.target.value)}
          />
          <button className={textbox === "" ? "clearIconOff" : "clearIcon"}>
            <FontAwesomeIcon
              color="black"
              icon={faTimesCircle}
              onClick={() => setTextbox("")}
            />
          </button>
        </div>
        <button className={textbox === "" ? "editButtonOff" : "editButton"}>
          <FontAwesomeIcon color="white" icon={faPaperPlane}/>
        </button>
      </form>
    </div>
  );
}

export default Message;
