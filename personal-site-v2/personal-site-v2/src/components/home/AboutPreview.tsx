import { Link } from "react-router-dom";
import styles from "../../styles/AboutPreview.module.css";

export default function AboutPreview() {
    return ( 
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.eyebrow}>About Me</p>

                <h2 className={styles.title}>
                    I build software with both the product and the engineering in mind.
                </h2>

                <div className={styles.content}>
                    <p>
                        I&apos;m a Computer Science student as California State University Northridge, focused on 
                        full-stack development and building practical software that solves real problems.
                    </p>

                    <p>
                        I enjoy taking ideas from early planning through design, development, deployment, and continued improvement.
                    </p>
                </div>

                <Link to="/about" className={styles.link}>
                    More About Me
                </Link>
            </div>
        </section>
    );
}