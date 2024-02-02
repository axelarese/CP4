import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import home from "../../assets/images/home.png";
import plus from "../../assets/images/plus.png";
import sideCar from "../../assets/images/sideCar.png";

export default function Navbar() {
  return (
    <nav className={styles.globalContainer}>
      <div>
        <Link to="/service">
          <img className={styles.homeIcon} src={home} alt="home" />
        </Link>
      </div>
      <div>
        <Link to="/add">
          <img className={styles.plusIcon} src={plus} alt="icon plus" />
        </Link>
      </div>
      <div>
        <Link to="/realisations">
          <img className={styles.profilIcon} src={sideCar} alt="login" />
        </Link>
      </div>
    </nav>
  );
}
