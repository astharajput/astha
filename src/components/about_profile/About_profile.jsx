import React from 'react'
import ME from '../../assets/a2.png'
import './About_profile.css'
import { FaAward } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
const About_profile = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="aboutme">
                    <div className="about__me-image">
                        <img src={ME} alt="About mypic" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <Link to="/experience" style={{ color: "white" }} >
                            <article className='about__card' style={{ cursor: "pointer" }}>
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <h3>2.5+</h3>
                            </article>
                        </Link>
                        <Link to="" style={{ color: "white" }}>
                            <article className='about__card' style={{ cursor: "pointer" }}>
                                <GiSpellBook className='about__icon' />
                                <h5>Internship</h5>
                                <h3>4+<small> projects</small></h3>
                            </article>
                        </Link>

                        <Link to="/portfolio" className="btn1" style={{ color: "white" }}><article className='about__card' style={{ cursor: "pointer" }}>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <h3>8+ <small> Completed</small></h3>
                        </article>
                        </Link>
                    </div>
                    <p>
                        My name is Astha Solanki. My highest Education Qualification is B.E from
                        S.J.B INSTITUTE OF TECHNOLOGY,Bengaluru,Karnataka.My Stream is Computer Science and Engineering.
                        I am a Data Engineer currently working at Accenture.

                    </p>

                    <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default About_profile