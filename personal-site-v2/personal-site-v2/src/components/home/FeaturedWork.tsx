import { Link } from "react-router-dom";
import styles from "../../styles/FeaturedWork.module.css";
import tapItImage from "../../assets/TapItScreenshot.png";
import campusConnectImage from "../../assets/CampusConnect Screenshot.png";
import classlyLinkedImage from "../../assets/ClasslyLinked Screenshot.png";

const projects = [
    {
        title: "TapIt",
        description: "An NFC-based digital profile platform for instantly sharing professional and social information.",
        technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "Render"],
        path: "/projects/tapit",
        image: tapItImage,
        imageAlt: "TapIt application screenshot",
        featured: true,
    },
    {
        title: "CampusConnect",
        description: "A full-stack platform designed to help students connect with the campus community, find events, and more by unifying campus resources in one place.",
        technologies: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Prisma ORM", "Docker", "GitHub Actions"],
        path: "/projects/campusconnect",
        image: campusConnectImage,
        imageAlt: "CampusConnect application screenshot",
        featured: false,
    },
    {
        title: "ClasslyLinked",
        description: "A student networking platform that helps classmates discover and connect through shared courses and interests.",
        technologies: ["Python", "Flask", "React", "MongoDB", "Bcrypt", "Firebase", "Render"],
        path: "/projects/classlylinked",
        image: classlyLinkedImage,
        imageAlt: "ClasslyLinked application screenshot",
        featured: false,
    },
];

export default function FeaturedWork() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p className={styles.eyebrow}>Featured Work</p>

                    <h2 className={styles.title}>Things I&apos;m building</h2>

                    <p className={styles.introduction}>
                        A selection of projects that reflect how I approach product design,
                        engineering, and problem-solving.
                    </p>
                </div>

                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`}
                        >
                            <div className={styles.projectImage}>
                                <img 
                                    src={project.image} 
                                    alt={project.imageAlt} 
                                />
                            </div>

                            <div className={styles.projectContent}>
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <Link to={project.path} className={styles.projectLink}>
                                    View Project
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <Link to="/projects" className={styles.viewAllLink}>
                    View All Projects
                </Link>
            </div>
        </section>
    );
}