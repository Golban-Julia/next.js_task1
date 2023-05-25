import { FC } from "react";
import { Pagination } from '@/components/pagination/Pagination'
import styles from './UsersList.module.scss'
import Link from "next/link";


export type UsersListProps = {
    currentPage: number,
    totalPages: number,
    usersByOnePage: User[],
};

export type User = {
    id: string;
    image: string;
    firstName: string;
};



export const UsersList:FC<UsersListProps> = ({ currentPage, totalPages, usersByOnePage }) => {
    return (
        <section className={styles.users__list}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <ul>{usersByOnePage.map((user) => {
              return (
              <div className={styles.users__list__block}>
                <li key={user.id} >
                  <div className={styles.users__list__item} >
                    <img src={user.image} alt='user' width={150} height={160} />
                    <Link href={`/user/${user.id}`} className={styles.users__list__btn}>{user.firstName} </Link>
                  </div>
                </li>
              </div>
              )})}
            </ul>
          </div>
        </div>

        <Pagination    
        currentPage={currentPage}//1
        totalPages={totalPages}//10
      />
      </section>
    )
}