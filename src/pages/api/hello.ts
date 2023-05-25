export const API_URL = 'https://dummyjson.com';

export const getUserById = async(id:string) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();
    return data;
};

export const getUsers = async(limit:number, page:number) => {
    const response = await fetch(`${API_URL}/users?limit=100`);
    const {users, total } = await response.json();
    const amountUsers = total;

    const paginatedUsers = users.slice((page - 1) * limit, page * limit)
   
    return { usersByOnePage: paginatedUsers, amountUsers }
};
