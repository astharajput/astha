import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const Socials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/astha1606/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/astharajput" target="_blank"><FaGithub /></a>
        </div>
    )
}

export default Socials