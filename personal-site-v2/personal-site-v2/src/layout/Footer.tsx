import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Joseph Forsyth</p>
            </div>
        </footer>
    );
}