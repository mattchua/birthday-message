import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

function Bio(props) {
  return (
    <span>
      <div>{props.name}</div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faBirthdayCake} />{" "}
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(new Date(props.birthday))}
      </div>
    </span>
  );
}

export default Bio;
