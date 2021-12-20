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
          <a className={styles.special_event}>
            <span>EVENTS</span>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.special_event}>
            <span>RECRUITMENT</span>
          </a>
        </Link>
        <Link href="/">
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

// const Nav = styled.nav`
// width: 100%:
// height: 60px;
// background-color: transparent;
// display: flex;
// align-items: center;
// padding: 0 5%;
// margin-top: 25px;
// `;

// const Logo = styled.img`
//   height: 100px;
// `;

// const NavMenu = styled.div`
//   margin-left: 50em;
//   display: flex;
//   flex: 1;
//   align-items: center;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 0 12px;
//     cursor: pointer;

//     span {
//       color: #d8dbd6;
//       padding: 1px 0;
//       font-size: 16px;
//       letter-spacing: 3.5px;
//       position: relative;
//       margin: 0 12px;
//       font-weight: 300;

//       &:after {
//         content: "";
//         height: 2px;
//         background: white;
//         position: absolute;
//         left: 0;
//         right: 0;
//         bottom: -6px;
//         opacity: 0;
//         transform-origin: left center;
//         transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//         transform: scaleX(0);
//       }
//     }

//     span:hover {
//       color: white;
//     }

//     &:hover {
//       span:after {
//         transform: scaleX(1);
//         opacity: 1;
//       }
//     }
//   }
// `;
