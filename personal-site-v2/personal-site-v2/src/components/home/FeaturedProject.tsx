import { Link } from "react-router-dom";
import styles from "../../styles/FeaturedProject.module.css";
import TapItScreenshot from "../../assets/TapItScreenshot.png";

export default function FeatureProject() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>Featured Project</p>

                    <h2 className={styles.title}>TapIt</h2>

                    <p className={styles.description}>
                        TapIt is an NFC-based digital profile platform that lets users
                        instantly share contact information, social and professional links, portfolios,
                        and professional details with a simple tap.
                    </p>

                    <div className={styles.techStack}>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>FastAPI</span>
                        <span>PostgreSQL</span>
                    </div>

                    <div className={styles.actions}>
                        <Link to="/projects/tapit" className={styles.primaryLink}>
                            View Project
                        </Link>

                        <a 
                            href="https://tapitcard.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryLink}
                        >
                            Visit Live Site
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.browserWindow}>
                        <div className={styles.browserBar}>
                            <div className={styles.browserControls}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className={styles.addressBar}>
                                tapitcard.org
                            </div>
                        </div>
                            
                            <img 
                                src={TapItScreenshot}
                                alt="Screenshot of TapIt website"
                                className={styles.projectImage}
                            />
                        </div>
                    </div>
                </div>
        </section>
    );
}