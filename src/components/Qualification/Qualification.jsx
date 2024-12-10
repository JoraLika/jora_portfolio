import React, {useState} from 'react';
import './qualification.scss';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) =>{
      setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={
            toggleState === 1 ? 
          "qualification_button qualification_active button--flex" : 
          "qualification_button button--flex"
          } onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div className={
            toggleState === 2 ? 
          "qualification_button qualification_active button--flex" : 
          "qualification_button button--flex"
          } onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className={
            toggleState === 1 ? 
          "qualification_content qualification_content-active" 
          : "qualification_content"
          }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Computer Science Bachelor
                </h3>
                <span className="qualification_subtitle">
                  Tirane - Fakulketi i Shkencave te Natyres
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div className={
            toggleState === 2 ? 
          "qualification_content qualification_content-active" 
          : "qualification_content"
          }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Front End Developer Intern
                </h3>
                <span className="qualification_subtitle">
                  Tirane - Pragmatic Software shpk
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  July 2021 - November 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Front End Developer
                </h3>
                <span className="qualification_subtitle">
                  Tirane - Kreatx
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                    November 2022 - May 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                    Software Developer
                </h3>
                <span className="qualification_subtitle">
                    Tirane - ccube.ai
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                    August 2023 -  Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
