export type addressType = {
    city: string,
    postalCode: string,
    state: string,
}

export type userType = {
    id: string,
    firstName: string,
    lastName: string,
    address: addressType,
    image: string,
}

export type userItem = {
    firstName: string,
    id:string,
}

export type usePagination = {
    totalItems: number,
    currentPage: number,
    itemsPerPage: number
}



