import { FC } from "react";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import styles from "./SearchBar.module.scss";
import { useState } from 'react';
import Link from "next/link";
import { ChangeEvent } from 'react';
import axios from "axios";
import { API_URL } from "@/pages/api/hello";

export type User = {
    id: string;
    image: string;
    firstName: string;
};

export type Users = {
    users: User[];
};

export const SearchBar:FC<Users> = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<Users>({ users: [] });
    const { users } = searchResults;

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchValue(value);

        const response = await axios.get(`${API_URL}/users/search?q=${value}`);
        const data = response.data;
        setSearchResults(data);
    }

    return (
    <div className={styles.searchBar}>
        <form className={styles.searchBar__input}>
            <FaSearch />
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search User by name"
            />
            <label htmlFor='search_users'></label>
        </form>

        <div className={styles.searchBar__result}>
            {users?.map((user) => (
                <div key={user.id} className={styles.searchBar__list}>
                    <div>
                        <Link href={`/user/${user.id}`}>
                            <img src={user.image} alt='user' width={30} height={30} />
                        </Link>
                        <Link
                            href={`/user/${user.id}`}
                            className={styles.search__dropdown_row}>
                            {user.firstName}
                        </Link>
                        </div>
                        <Link href={`/user/${user.id}`}>
                            <AiOutlineRight />
                        </Link>
                </div>
            ))}
        </div>
    </div>
    );
};
