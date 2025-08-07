import React, { useState, useEffect } from "react";
import "./Home.scss";
import "./ContactLinks.css";

function Home() {
    const [form, setForm] = useState('Home');


    //   Runs rain background effect
    useEffect(() => {
        rainBackground();
    }, []);


    // Rain background
    const rainBackground = () => {
    const rain = document.querySelector(".rain");
    for (let i = 0; i < 500; i++) {
        const drop = document.createElement("div");
        drop.className = "drop";
        rain.appendChild(drop);
    }
}

    return (
        <div className='entire-container'>
            <title>Joseph Forsyth</title>
            {/* Rain Background */}
            <div className='rain'></div>

            {/* Menu */}
            <div className='menu-wrapper'>
                <div className='menu-hover-zone'></div>

                <div className='menu-div'>
                    <ul className='menu-list'>
                        <li className='list-item' onClick={() => setForm('Resume')}>Resume</li>
                        <li className='list-item' onClick={() => setForm('PersonalProjects')}>Personal Projects</li>
                        <li className='list-item' onClick={() => setForm('ContactLinks')}>Contact Info and Links</li>
                        <li className='list-item' onClick={() => setForm('Home')}>Home</li>
                    </ul>
                    <h3 className='menu-tag'>Menu</h3>
                </div>

                {/* Home */}
                {form === 'Home' && (
                    <div className='home-container'>
                        <title>JF | Home</title>
                        <h1 className='home-title'>Joseph Forsyth</h1>
                        <h2 className='home-subtitle'>Computer Science Student - Aspiring Fullstack Engineer</h2>

                        {/* <img className='main-image'></img>  to add later*/}

                        <h1 className='about-me-title'>About Me</h1>
                        <p className='about-me-content'>Will be added soon...</p>
                    </div>
                )}
                
                {/* Resume */}
                {form === 'Resume' && (
                    <div className='resume-container'>
                        <title>JF | Resume</title>

                        <h1 className="my-links-title">My Resume</h1>
                        
                        <div className="links-container">
                            <a href="/Joseph Forsyth Resume 8_25.pdf" download className="link">Download Resume</a>
                        </div>

                        <div className='resume-div'>
                            <iframe
                                src="/Joseph Forsyth Resume 8_25.pdf"
                                width="100%"
                                height="600em"
                                style={{border: "none" }}
                                title="Resume"
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Personal Projects */}
                {form === 'PersonalProjects' && (
                    <div className='personal-projects-container'>
                        <title>JF | Projects</title>

                        <h1 className="my-links-title">My Personal Projects</h1>

                        <div className='links-container'>
                            <a rel="noopener noreferrer" href="https://github.com/jjforsyth15/ClasslyLinked-App" target="_blank" className="link">
                                ClasslyLinked
                            </a>
                            <a rel="noopener noreferrer" href="https://github.com/jjforsyth15/Website" target="_blank" className="link">
                                Personal Website
                            </a>
                        </div>

                    </div>
                )}

                {/* Contact Info & Links */}
                {form === 'ContactLinks' && (
                    <div className='contact-container'>
                        <title>JF | Contact & Links</title>

                        <h1 className='my-links-title'>My Links</h1>

                        <div className="links-container"> 
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-forsyth-467740247/" target="_blank" className="link">
                                LinkedIn
                            </a>
                            <a rel="noopener noreferrer" href="https://github.com/jjforsyth15" target="_blank" className="link">
                                GitHub
                            </a>
                            <a rel="noopener noreferrer" href="https://linktr.ee/sose.dev" target="_blank" className="link">
                                Society of Software Engineers
                            </a>
                        </div>
                    </div>
                )}
                


            </div>


        </div>
    )

}

export default Home;