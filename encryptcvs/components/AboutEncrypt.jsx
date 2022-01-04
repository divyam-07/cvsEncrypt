import styles from "../styles/aboutencrypt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCode } from "@fortawesome/free-solid-svg-icons"; // import the icons you need 

function AboutEncrypt(){
 return (
   <div className={styles.container}>
   <p className={styles.content}>
   <span className={styles.e}>E</span>ncrypt-The Tech Society of CVS is the academic society of department of computer science. It is a platform where all the students diligently   work  towards spreading technical education and awareness in this technology dominated world.
    Our mission is to enlighten the students about the possibilities and opportunities that the technology can offer.
    </p>

   <p className={styles.content}> "WE WANT TO CREATE A HEALTHY AND MOTIVATING TECHVIRONMENT" </p>
   
   <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>

   </div>
 )
}

export default AboutEncrypt;