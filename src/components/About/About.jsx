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
                Well, I'm Jora. I am from Tirana and i live here. I just finished my bachelor's in computer science. 
                During these years, i learned the basics of programming at school and further expanded this knowledge myself. 
                I specialize more in front-end development, where i can create and build various websites and applications. 
                I like to challenge myself by trying new things and styles that are unique to other people, 
                hoping someday i can give back and share my knowledge to everyone who is willing to learn.
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
