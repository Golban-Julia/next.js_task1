import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.scss"


export const Header:FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.header__wrapper}>
                    <Link href="/">Home</Link>
                    <Link href="/users">Users List</Link>
                </nav>
            </div>
        </header>
    )
};

