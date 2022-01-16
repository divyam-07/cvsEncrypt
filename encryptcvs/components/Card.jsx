import styles from "../styles/departments.module.css";

const Card = (props) => {


 return (
  <>
   <div className={styles.card}>
   {/* <div className={styles.card_image}> */}
   <h2  className={styles.dept}>{props.dept}</h2>
   {/* </div> */}
  </div>
  </>
 )
}

export default Card;