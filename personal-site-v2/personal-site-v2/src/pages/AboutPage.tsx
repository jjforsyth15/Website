import styles from "../styles/AboutPage.module.css";
import PortraitImage from "../assets/Career Fair Headshot.jpg";

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>Get to know me</p>

                    <h1>About Me</h1>

                    <p className={styles.heroDescription}>
                        I'm a computer science student and software developer passionate about building useful, thoughtful technology 
                        that solves real-world problems. 
                    </p>

                    <p className={styles.heroDescription}>
                        I enjoy working across the full development process, from shaping an idea and designing 
                        the experience to building, deploying, and improving the final product. I focus on building software that is both functional and maintainable, 
                        with a strong emphasis on clean architecture, intuitive user experiences, and scalable backend solutions.
                    </p>
                </div>

                <div className={styles.imageWrapper}>
                    <img 
                        src={PortraitImage}
                        alt="Joseph Forsyth"
                        className={styles.profileImage}
                    />
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.storyContainer}>
                    <h2>My Story</h2>

                    <p>
                        My passion for software engineering began with a curiosity about how technology works 
                        and quickly eveolved into a love for creating applications that can help to make people's lives easier.
                    </p>

                    <p>
                        Throughout my journey as a Computer Science student, I've explored full-stack web development, embedded systems, cloud technologies, 
                        and product design. I enjoy solving challenging problems and continuously learning new technologies and techniques to improve my skills as a software engineer.
                    </p>

                    <p>
                        Today I'm focused on building software that is intuitive, reliable, and thoughtfully designed, from the first idea to a polished product
                        that people can use and enjoy. I believe that great software is built through a combination of creativity, technical skill, and a deep understanding of the user's needs.
                    </p>
                </div>
            </section>

            <section className={styles.buildSection}>
                <div className={styles.buildContainer}>
                    <h2>What I Build</h2>

                    <div className={styles.buildCards}>
                        <article className={styles.buildCard}>
                            <span className={styles.buildCardIcon}>💻</span>

                            <h3>Full-Stack Applications</h3>

                            <p>
                                Designing and developing modern web applications using React, TypeScript, FastAPI, and cloud technologies 
                                with a focus on clean architecture, usability, and scalable backend solutions.
                            </p>
                        </article>

                        <article className={styles.buildCard}>
                            <span className={styles.buildCardIcon}>⚡</span>

                            <h3>Embedded Systems</h3>

                            <p>
                                Building hardware projects with ESP32 microcontrollers, wireless communication, and IoT technologies 
                                while exploring the connection between software and hardware.
                            </p>
                        </article>

                        <article className={styles.buildCard}>
                            <span className={styles.buildCardIcon}>🚀</span>

                            <h3>Product Development</h3>

                            <p>
                                Turning ideas into polished products by combining software engineering, thoughtful design, 
                                and continuous improvement based on on real user feedback.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className={styles.technologiesSection}>
                <div className={styles.technologiesContainer}>
                    <p className={styles.eyebrow}>My toolkit</p>
                    <h2>Technologies I Work With</h2>
                    <p>
                        I use a range of technologies across frontend development, backend systems, databases, cloud 
                        platforms, and development tools.
                    </p>
                </div>

                <div className={styles.technologiesGrid}>
                    <article className={styles.technologyCard}>
                        <h3>Languages</h3>

                        <div className={styles.technologyList}>
                            <span>🐍 Python</span>
                            <span>⌨️ TypeScript</span>
                            <span>🌐 JavaScript</span>
                            <span>C++</span>
                            <span>♯ C#</span>
                            <span>☕ Java</span>
                        </div>
                    </article>

                    <article className={styles.technologyCard}>
                        <h3>Frontend</h3>

                        <div className={styles.technologyList}>
                            <span>⚛️ React</span>
                            <span>Angular</span>
                            <span>React Native</span>
                            <span>Expo</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Vite</span>
                        </div>
                    </article>

                    <article className={styles.technologyCard}>
                        <h3>Backend</h3>

                        <div className={styles.technologyList}>
                            <span>⚡FastAPI</span>
                            <span>Flask</span>
                            <span>Express</span>
                            <span>ASP.NET Core</span>
                            <span>REST APIs</span>
                            <span>Node.js</span>
                        </div>
                    </article>

                    <article className={styles.technologyCard}>
                        <h3>Databases</h3>

                        <div className={styles.technologyList}>
                            <span>PostgreSQL</span>
                            <span>MongoDB</span>
                            <span>SQLAlchemy</span>
                            <span>Prisma ORM</span>
                            <span>Alembic</span>
                        </div>
                    </article>

                    <article className={styles.technologyCard}>
                        <h3>Cloud & Tools</h3>

                        <div className={styles.technologyList}>
                            <span>Git</span>
                            <span>🐳Docker</span>
                            <span>🔥Firebase</span>
                            <span>Render</span>
                            <span>Supabase</span>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}