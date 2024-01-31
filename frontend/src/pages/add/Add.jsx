import styles from "./Add.module.css";

export default function Add() {
  return (
    <div className={styles.globalContainer}>
      <h2>NOUVEAU SERVICE</h2>
      <input type="text" placeholder="Nouveau service" />
      <button type="button">AJOUTER</button>
    </div>
  );
}
