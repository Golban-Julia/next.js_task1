import { FC } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { userType } from "../../types";
import { API_URL } from '@/pages/api/hello';
import { UserInfo } from "@/components/userInfo/UserInfo";

type userPageProps = {
    user: userType,
}

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
  const { id } = context.params as { id: string };
  const response = await axios.get(`${API_URL}/users/${id}`);
  const data = response.data;
 
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            user: data
        },
    }
};

const UserPage:FC<userPageProps> = ({ user }) => {
    return (
        <UserInfo user={ user }/>
    )
}

export default UserPage