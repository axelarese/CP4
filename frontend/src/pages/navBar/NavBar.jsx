import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import home from "../../assets/images/home.png";
import plus from "../../assets/images/plus.png";
import profil from "../../assets/images/user.png";

export default function Navbar() {
  return (
    <nav className={styles.globalContainer}>
      <div className={styles.miniGlobalContainer}>
        <div>
          <Link to="/">
            <img className={styles.homeIcon} src={home} alt="home" />
          </Link>
        </div>
        <div>
          <Link to="/add">
            <img className={styles.plusIcon} src={plus} alt="icon plus" />
          </Link>
        </div>
        <div>
          <Link to="/login">
            <img className={styles.profilIcon} src={profil} alt="login" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
