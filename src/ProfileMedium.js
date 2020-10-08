import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//ProfileMedium.js
import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';


function ProfileMedium (props)
{
    const [enabled, setDisabled] = React.useState(true);
    return (
        <span className='profile'>
            <img alt='' className='ProfileImg' src={props.src} />
            <div>{props.name}</div>
            <div><FontAwesomeIcon icon={faBirthdayCake} /> {props.birthday}</div>
            <div className='messageRow'>
                <textarea className='birthdayMessage' disabled={enabled}></textarea>
                <button className='editButton' onClick={() => setDisabled(!enabled)}><FontAwesomeIcon color='black' icon={faEdit} /></button>
            </div>
        </span>
    );
}

export default ProfileMedium