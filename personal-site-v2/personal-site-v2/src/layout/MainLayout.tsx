import { Link, useNavigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/MainLayout.module.css";



function MainLayout() {
  const navigate = useNavigate();

    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )

}

export default MainLayout;