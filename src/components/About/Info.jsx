import React from 'react';
import './about.scss';

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
      <i class='bx bx-award about_icon'></i>

        <h3 className="about_title">Experiences</h3>
        <span className="about_subtitle">6 Months</span>
      </div>

      <div className="about_box">
      <i class='bx bx-briefcase-alt about_icon' ></i>

        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">+5 Projects</span>
      </div>

      <div className="about_box">
      <i class='bx bx-support about_icon'></i>

        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Info;
