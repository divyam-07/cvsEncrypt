import styled from "styled-components"
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import Link from "next/link"
const Navbar = () => {
    return (
        <Nav style={{position: "fixed", top: 0, width: "20%", zIndex:100}}>
            <Logo src="https://s3-us-west-2.amazonaws.com/fuel20-public/photo/a1/b6/PHO-111802/PHO-111802-COMP.jpg" />
            <NavMenu>
                <Link href="/">
                    <a>
                        <HomeIcon style={{ color: "white", height: "15px" }} />
                        <span style={{ color: "white" }}>HOME</span>
                    </a>
                </Link>
                <Link href="/events">
                    <a>
                        <EventIcon style={{ color: "white", height: "15px" }} />
                        <span style={{ color: "white" }}>EVENTS</span>
                    </a>
                </Link>
            </NavMenu>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
width: 100%:
height: 60px;
background-color: black;
display: flex;
align-items: center;
padding: 0 10px;
`

const Logo = styled.img`
height: 60px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        span{
            font-size: 17px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
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
`