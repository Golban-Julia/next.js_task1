import { FC } from "react";
import styles from "./Footer.module.scss" 

export const Footer:FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
                    <p>Copyright © 2018 by Random site</p>
                </div>
            </div>
        </footer>
    )

};

