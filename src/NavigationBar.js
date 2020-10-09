import { faAnchor } from '@fortawesome/free-solid-svg-icons/faAnchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavigationBar ()
{
    return (
        <div className='topNav'>
            <a href="/"><FontAwesomeIcon icon={faAnchor} color='white'/> Birthbook</a>
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

export default NavigationBar