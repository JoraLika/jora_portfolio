import React from 'react';
import './about.scss';
import AboutImg from '../../assets/photo-2.jpg';
import CV from '../../assets/pdf/jora-cv.pdf';
import Info from './Info';

const About = () => {
  return (
   <section className="about section" id="about">
    <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about-data">
                <Info/>

                <p className="about_description">
                I am a newly graduated student based in Albania. I love to create and build simple and yet modern functional 
                websites and applications that are unique to people's eyes. I'm always looking for ways to improve 
                myself hoping someday i can give back and share my knowledge to everyone who is willing to learn.
                </p>

                <a download="" href={CV} className="button button--flex about_button">
                    Download CV <i class='bx bx-download button_icon'></i>
                </a>
            </div>
        </div>
   </section>
  )
}

export default About;
