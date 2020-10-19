import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

function Bio(props) {
  return (
    <span>
      <div>{props.name}</div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faBirthdayCake} /> {props.birthday}
      </div>
    </span>
  );
}

export default Bio;
