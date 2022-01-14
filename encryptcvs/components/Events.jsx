import styles from "../styles/events.module.css";

function Events() {
    return (
        <div className={styles.container}>
            <h2 className={styles.events}>Events</h2>
            <p className={styles.eventpara}>We hold many events which includes games, webinar and coding events.</p>

            <h2 className={styles.games}>GAMES</h2>

            <div className={styles.box}>
                <div className={styles.imgchild}>
                    <img src="game.png" alt="game" className={styles.image}></img>
                </div>
                <div className={styles.contentchild}>
                    <ul>
                        <li>FIFA’19</li>
                        <li>PUBG</li>
                        <li>Battlegrounds Mobile India</li>
                        <li>Counter Strike</li>
                        <li>Debate Battle</li>
                        <li>Geek Hunt</li>
                        <li>Comic Concert</li>
                    </ul>
                </div>
            </div>
            <h2 className={styles.webinar}>WEBINAR</h2>

            <div className={styles.box}>
                <div className={styles.contentchild}>
                <ul>
                        <li>MICROSOFT AZURE WEBINAR</li>
                        <li>ROADMAP TO BECOME  A DATA SCIENTIST</li>
                    </ul>
                </div>
                <div className={styles.imgchild}>
                    <img src="game.png" alt="game" className={styles.image}></img>
                </div>
            </div>
            <h2 className={styles.codingEvents}>CODING EVENTS</h2>

            <div className={styles.box}>
                <div className={styles.imgchild}>
                    <img src="game.png" alt="game" className={styles.image}></img>
                </div>
                <div className={styles.contentchild}>
                    <ul>
                        <li>COMPETITIVE PROGRAMMING</li>
                        <li>BLIND CODING</li>
                    </ul>
                </div>
            </div>
            <h2 className={styles.muchMore}>AND MUCH MORE...</h2>
        </div>
    )
}

export default Events;