import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* <Navbar /> */}
      <div className={styles.main_content}>
        <p className={styles.we}>We are</p>
        <p className={styles.encrypt}>ENCRYPT</p>
        <hr className={styles.hr} />
        <p className={styles.content}> lorem ipsum </p>
      </div>
    </div>
  );
}
