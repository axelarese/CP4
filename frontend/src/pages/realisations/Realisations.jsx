// import { Link } from "react-router-dom";
import styles from "./Realisations.module.css";

import A1 from "../../assets/images/a1.jpg";
import A2 from "../../assets/images/a2.jpg";
import A3 from "../../assets/images/a3.jpg";
import A4 from "../../assets/images/a4.jpg";
import A5 from "../../assets/images/a5.jpeg";
import A6 from "../../assets/images/a6.jpeg";
import A7 from "../../assets/images/a7.jpeg";
import A8 from "../../assets/images/a8.jpeg";

export default function Realisations() {
  return (
    <div className={styles.allContainer}>
      <div>
        <p className={styles.titleRealisations}>NOS RÉALISATIONS</p>
      </div>
      <div className={styles.globalContainer}>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A1}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Mercedes</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A2}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Porsche</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A7}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Mercedes</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A3}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>BMW</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A6}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Mercedes</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A4}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Porsche</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A5}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Mercedes</h2>
        </div>
        <div className={styles.containerImage}>
          <img
            className={styles.imgRealisations}
            src={A8}
            alt="imageRealisations"
          />
          <h2 className={styles.titleCar}>Mercedes</h2>
        </div>
      </div>
    </div>
  );
}
