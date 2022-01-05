import { useRouter } from "next/router"
import Navbar from "../components/Navbar";
const year = () => {
    const router = useRouter();
    const pageYear = router.query.year;
    return (
        <>
        <Navbar/>
          <h1 style={{fontSize:"50px", marginTop:"5rem", padding:"auto"}}> Year {pageYear}</h1>  
        </>
    )
}

export default year
