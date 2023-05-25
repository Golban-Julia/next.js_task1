import Head from 'next/head';
import styles from './UserInfo.module.scss';
import { FC } from 'react';
import { userType } from "../../types";

type userInfoProps = {
    user: userType,
}


export const UserInfo: FC<userInfoProps> = ({ user }) => {

    const { firstName, lastName, id, address, image } = user || {};
    const { city, postalCode, state } = address || {};

    if (!user) {
        return <h2>User empty!</h2>
    }

    return (
        <>
            <Head>
                <title>Users list</title>
                <meta name="description" content="Users list" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.user__item}>
                <img
                    src={image}
                    alt='user'
                    width={300}
                    height={300}
                />
                <div>
                    <p><span>First Name:</span> {firstName}{id};</p>
                    <p><span>Last Name:</span> {lastName};</p>
                    <p>
                        <span>Address:</span> {`${city}, ${postalCode}, ${state}`}.
                    </p>
                </div>
            </div>
        </>
    )
};

