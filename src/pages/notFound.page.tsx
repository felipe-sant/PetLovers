import React from "react";
import styles from "../styles/notFound.module.css";

class NotFound extends React.Component {
    render () {
        return (
            <div className={styles.body}>
                <h1>404</h1>
                <p>Not Found</p>
            </div>
        )
    }
}

export default NotFound