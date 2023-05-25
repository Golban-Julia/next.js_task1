import { FC } from "react";
import { GetServerSidePropsContext } from 'next';
import { getUsers } from '@/pages/api/hello'
import { UsersList } from "@/components/usersList/UsersList";
import { SearchBar } from "@/components/searchBar/SearchBar";
import Head from "next/head";


const PER_PAGE = 10;

export type UsersProps = {
  currentPage: number,
  totalPages: number,
  usersByOnePage:[],
}


const Users: FC <UsersProps>=({ currentPage, totalPages, usersByOnePage })=>{

  return (
    <>
      <Head>
        <title>Users list</title>
        <meta name="description" content="Users list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBar users={[]} />
      
        <UsersList
          currentPage={currentPage}
          totalPages={totalPages}
          usersByOnePage={usersByOnePage}
        />
      </main>
    </>
  )
}

export const getServerSideProps = async (context:GetServerSidePropsContext) => {

  const currentPage = Number(context.query.page) || 1;
  const { usersByOnePage, amountUsers} = await getUsers(PER_PAGE, currentPage)
  const totalPages = Math.ceil(amountUsers / PER_PAGE)

  return {
    props: {
      totalPages,// 100/10
      currentPage, //1
      usersByOnePage, //пользователи на одной страничке
    }
  }
}

export default Users


