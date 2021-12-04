import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* <Navbar /> */}
      <div className={styles.main_content}>
        <p className={styles.we}>We are</p>
        <p className={styles.encrypt}>ENCRYPT</p>
        <hr className={styles.hr} />
        <p className={styles.content}>
          The Tech Society of College of Vocational Studies{" "}
        </p>
        <div className={styles.arrow_div}>
          {/* <ArrowDownwardIcon className={styles.arrow} /> */}
          <KeyboardArrowDownIcon className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}
