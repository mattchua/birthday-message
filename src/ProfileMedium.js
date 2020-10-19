//ProfileMedium.js
import React from "react";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Message from "./Message";

function ProfileMedium(props) {
  return (
    <span className="profile">
      <Avatar src={props.src} />
      <Bio name={props.name} birthday={props.birthday} />
      <Message />
    </span>
  );
}

export default ProfileMedium;
