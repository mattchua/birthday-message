//ProfileMedium.js
import React from 'react'


function ProfileMedium (props)
{
    const [enabled, setDisabled] = React.useState(true);
    return (
        <span className='profile'>
            <img alt='' className='ProfileImg' src={props.src} />
            <div>{props.name}</div>
            <div>{props.birthday}</div>
            <div className='messageRow'>
                <textarea className='birthdayMessage' disabled={enabled}></textarea>
                <button className='editButton' onClick={() => setDisabled(!enabled)}></button>
            </div>
        </span>
    );
}

export default ProfileMedium