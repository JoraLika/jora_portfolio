import React, {useState} from 'react';
import './services.scss';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">
                        Product <br /> Designer
                    </h3>
                </div>

                <span className="services_button" onClick={() => 
                toggleTab(1)}>
                    View More
                <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                <div className={toggleState === 1 ? 
                    "services_modal active-modal" : "services_modal" }>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                        <h3 className="services_modal-title">
                            Product Designer
                        </h3>
                        <p className="services_modal-description">
                            My services that i have developed 
                            so far as a junior developer.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Familiar with Agile and Scrum.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Prototyping.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Creative and Analytical Thinking.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Built and Followed a Product Roadmap.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Great Management and Organizational Skills.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">
                        Ui/Ux <br /> Designer
                    </h3>
                </div>

                <span className="services_button" onClick={() => 
                toggleTab(2)}>
                    View More
                <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                <div className={toggleState === 2 ? 
                    "services_modal active-modal" : "services_modal" }>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                        <h3 className="services_modal-title">Ui/Ux Designer</h3>
                        <p className="services_modal-description">
                            My services that i have developed 
                            so far as a junior developer. 
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Built Responsive Web Designs.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   User Testing.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    User Research and User Strategy.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Interaction Design. 
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Organized and Structured Information Content.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">
                    Visual <br /> Designer
                    </h3>
                </div>

                <span className="services_button" onClick={() => 
                toggleTab(3)}>
                    View More 
                <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                <div className={toggleState === 3 ? 
                    "services_modal active-modal" : "services_modal" }>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            My services that i have developed 
                            so far as a junior developer. 
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Built and Organized Product Displays.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Experience with Transitions and Motion Design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Strong Problem-Solving Skills.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    A Solid Foundation in Typography, Layout and Design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design Logos, Icons and Infographics.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
