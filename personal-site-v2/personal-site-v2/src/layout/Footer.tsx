import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <Link to="/" className={styles.name}>
                        Joseph Forsyth
                    </Link>
                    <p className={styles.tagline}>
                        Full-stack software engineer
                    </p>
                </div>

                <div className={styles.links}>
                    <a 
                        href="https://github.com/jjforsyth15"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/joseph-forsyth-467740247/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Joseph Forsyth</p>
            </div>
        </footer>
    );
}