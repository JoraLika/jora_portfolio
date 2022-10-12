import React from 'react';
import './home.scss';

const Data = () => {
  return (
    <div className="home_data">
        <h1 className="home_title">
            Jora Lika           
        </h1>
        <h3 className="home_subtitle">
            Hello.
        </h3>
        <p className="home_description">
        I'm a junior developer, very passionate and dedicated to my work. 
        I'm always looking for new experiences and challenges. 
        This is my portfolio with some of the projects i've worked on.
        Thanks for stopping by! 
        </p>

        <a href="#contact" className="button button--flex">
            Say Hello <i class="bx bx-happy home_data-icon"></i>
        </a>
    </div>
  );
};

export default Data;
