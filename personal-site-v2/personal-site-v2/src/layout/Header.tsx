import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    JF
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                    >
                        Resume
                    </NavLink>
                    
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}