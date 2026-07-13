import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    JG
                </Link>

                <nav className={styles.nav}>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}