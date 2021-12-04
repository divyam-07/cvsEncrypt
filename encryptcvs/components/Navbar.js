import styled from "styled-components";
// import HomeIcon from "@mui/icons-material/Home";
// import EventIcon from "@mui/icons-material/Event";
import Link from "next/link";
const Navbar = () => {
  return (
    <Nav style={{ position: "fixed", top: 0, width: "20%", zIndex: 100 }}>
      <Logo src="enc-logo.png" />
      <NavMenu>
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
          <a>
            <span>SOMETHING</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>WILL</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>COME</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>UP</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>HERE</span>
          </a>
        </Link>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
width: 100%:
height: 60px;
background-color: transparent;
display: flex;
align-items: center;
padding: 0 100px;
`;

const Logo = styled.img`
  height: 100px;
`;

const NavMenu = styled.div`
  margin-left: 50em;
  display: flex;
  flex: 1;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
      color: rgb(228, 226, 226);
      padding: 7px 0;
      font-size: 15px;
      letter-spacing: 3.5px;
      position: relative;
      margin: 0 12px;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
