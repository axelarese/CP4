import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import profil from "../../assets/images/user.png";
import logo from "../../assets/images/logoCW.jpeg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link className={styles.svgLink} to="/service">
          <img className={styles.svgLogo} src={logo} alt="profile" />
        </Link>
      </div>

      <h1>Carwah_Detailling</h1>

      <div className={styles.favoris}>
        <Link className={styles.svgLink} to="/login">
          <img className={styles.svgProfil} src={profil} alt="profile" />
        </Link>
      </div>
    </div>
  );
}
