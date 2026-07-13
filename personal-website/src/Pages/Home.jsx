import React, { useState, useEffect } from "react";
import "./Home.scss";
import "./ContactLinks.css";

function Home() {
    const [form, setForm] = useState('Home');
    const [navOpen, setNavOpen] = useState(false);

    //   Runs rain background effect
    // useEffect(() => {
    //     rainBackground();
    // }, []);


//     // Rain background
//     const rainBackground = () => {
//     const rain = document.querySelector(".rain");
//     for (let i = 0; i < 500; i++) {
//         const drop = document.createElement("div");
//         drop.className = "drop";
//         rain.appendChild(drop);
//     }
// }

    return (
        <div className='entire-container'>
            <title>Joseph Forsyth</title>
            {/* Rain Background */}
            <div className='rain'></div>

            {/* Menu */}
            <div className='menu-wrapper'>
                 {/* Mobile menu button */}
  <button
    className="menu-toggle"
    aria-expanded={navOpen}
    aria-controls="main-menu"
    onClick={() => setNavOpen(v => !v)}
  >
    ☰ Menu
  </button>

  {/* Slide-down menu: now also opens via class, not just hover */}
                <div className='menu-hover-zone'></div>

                <div className='menu-div'>
                    <ul className='menu-list'>
                        <li className='list-item' onClick={() => setForm('Resume')}>Resume</li>
                        <li className='list-item' onClick={() => setForm('PersonalProjects')}>Projects</li>
                        <li className='list-item' onClick={() => setForm('ContactLinks')}>Contact Info and Links</li>
                        <li className='list-item' onClick={() => setForm('Home')}>Home</li>
                    </ul>
                    <h3 className='menu-tag'>Menu</h3>
                </div>

                {/* Home */}
                {form === 'Home' && (
                <div className='home-container'>
                    <title>JF | Home</title>

                    {/* HERO */}
                    <header className="hero">
                    <div className="badge">Computer Science @ CSUN</div>
                    <h1 className="title">Joseph Forsyth</h1>
                    <p className="subtitle">Aspiring Full-Stack Engineer</p>

                    <div className="cta">
                        <button className="btn" onClick={() => setForm('PersonalProjects')}>See Projects</button>
                        <a className="btn btn--ghost" href="/Joseph_Forsyth_Resume_9_25.pdf">Download Résumé</a>
                    </div>
                    </header>

                    {/* ABOUT */}
                    <section id="about" className="section">
                    <h2 className="section__title">About Me</h2>
                    <p className="section__text">
                        I’m a Computer Science student at CSUN focused on full-stack development. 
                        I've built reliable web apps with React frontends and Flask RESTful APIs, backed by MongoDB/Postgres, and deployed via Firebase and Render. 
                        Recently: a course-based matching platform with admin dashboards and a friends system with full request functionality.
                        I also serve as the Director of Marketing and Outreach for the CSUN Society of Software Engineers, helping to grow the club to over 400+ members.
                    </p>
                    </section>
                </div>
                )}
                
                {/* Resume */}
                {form === 'Resume' && (
                    <div className='resume-container'>
                        <title>JF | Resume</title>

                        <h1 className="my-links-title">My Resume</h1>
                        
                        <div className="links-container">
                            <a href="/Joseph_Forsyth_Resume_9_25.pdf" download className="link">Download Resume</a>
                        </div>

                        <div className='resume-div'>
                            <iframe
                                src="/Joseph_Forsyth_Resume_9_25.pdf"
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
    <h1 className="my-links-title">Projects</h1>

    <section id="projects" className="section">
      <div className="grid">
        <article className="card">
  <h3>ClassLink</h3>
  <p>Full-stack platform that matches students by course overlap.</p>
  <div className="tags">
    <span>React</span><span>Flask</span><span>MongoDB</span><span>Render</span><span>Firebase</span>
  </div>
  <div className="card-links">
    <a
      rel="noopener noreferrer"
      href="https://github.com/jjforsyth15/ClasslyLinked-App"
      target="_blank"
      className="btn btn--small"
    >
      Repo
    </a>
    <a
      rel="noopener noreferrer"
      href="https://cs380classlink.com/get_started"
      target="_blank"
      className="btn btn--small btn--ghost"
    >
      Live Site
    </a>
  </div>
</article>

        <article className="card">
          <h3>ClasslyLinked</h3>
          <p>Continuation of ClassLink with an admin dashboard, a friend requests system, and filters for specific class sections.</p>
          <div className="tags"><span>React</span><span>Flask</span><span>MongoDB</span></div>
          <a rel="noopener noreferrer" href="https://github.com/jjforsyth15/Website" target="_blank" className="btn btn--small btn--ghost">Site Repo</a>
        </article>

        <article className="card">
          <h3>Meet the Devs</h3>
          <p>Organizer for a 120 tech student recruiting and networking event at CSUN.</p>
          <div className="tags"><span>Leadership</span><span>Ops</span></div>
        </article>
      </div>
    </section>
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