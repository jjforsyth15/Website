import styles from "../../styles/Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                <p className={styles.eyebrow}>
                    Full-stack Software Engineer
                </p>

                <h1 className={styles.title}>
                    Engineering modern software from concept to deployment.
                </h1>

                <p className={styles.description}>
                    I design and build modern web applications with a focus on
                    clean architecture, intuitive user experiences, and scaleable backend solutions.
                </p>

                <div className={styles.actions}>
                    <Link to="/projects" className={styles.primaryButton}>
                        View My Work
                    </Link>

                    <Link to="/resume" className={styles.secondaryButton}>
                        View Resume
                    </Link>
                </div>

                <p className={styles.current}>
                    Currently building <strong>TapIt Beta</strong>.
                </p>

            </div>
        </section>
    );
}