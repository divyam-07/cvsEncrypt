import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Members from "../components/Members";
import styles from "../styles/index.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.main_content}>
          <p className={styles.we}>We are</p>
          <div className={styles.enc_box}>
            <p className={styles.encrypt}>ENCRYPT</p>
          </div>
          <hr className={styles.hr} />
          <p className={styles.content}>
            The Tech Society of College of Vocational Studies{" "}
          </p>
          <div className={styles.arrow_div}>
            {/* <ArrowDownwardIcon className={styles.arrow} /> */}
            <KeyboardArrowDownIcon className={styles.arrow} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
          </div>
        </div>
      </div>
    </>
  );
}
