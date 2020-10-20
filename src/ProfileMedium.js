//ProfileMedium.js
import React from "react";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Message from "./Message";

function ProfileMedium(props) {
  return (
    <li className="profile">
      <Avatar src={props.src} />
      <Bio name={props.name} birthday={props.birthday} />
      <Message id={props.id}/>
    </li>
  );
}

export default ProfileMedium;
