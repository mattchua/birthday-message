import React from 'react'

function Avatar(props){
  return(
    <img alt="" className="ProfileImg" src={props.src} />
  );
}

export default Avatar