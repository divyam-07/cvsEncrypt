import styled from "styled-components";
import styles from "../styles/navbar.module.css";
// import HomeIcon from "@mui/icons-material/Home";
// import EventIcon from "@mui/icons-material/Event";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      {/* <Logo src="enc-logo.png" /> */}
      <div className={styles.nav_menu}>
        <Link href="/">
          <a>
            <span>HOME</span>
          </a>
        </Link>
        <Link href="/events">
          <a>
            <span>EVENTS</span>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.special_event}>
            <span>RECRUITMENT</span>
          </a>
        </Link>
        <Link href="/alumni">
          <a>
            <span>ALUMNI</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>GALLERY</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
