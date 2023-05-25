import Link from "next/link";
import styles from "./Pagination.module.scss";
import { FC } from "react";

export const dotts = '...'


export type PaginationProps = {
  currentPage: number,
  totalPages: number,
}


export const Pagination:FC<PaginationProps> = ({ currentPage, totalPages}) => {
 
  
  if (totalPages === 1) return null;

  const getPages = (length:number, inc:number= 1) =>
    Array.from({ length }, (_, i) => i + inc)
 
   const usePagination = (totalPages: number, currentPage: number)=> {

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages)
  }
  // -> 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [1, 2, 3, 4, dotts, totalPages]
  }
  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [
      1,
      dotts,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dotts,
      totalPages,
    ]
  }
  // -> 1 ... 7 8 9 10
  return [1, dotts, ...getPages(4, totalPages - 3)]
  }

  const pages = usePagination(totalPages, currentPage)
  
  return (
    <div className={styles.pagination}>
      {pages.map((pageNumber,i) => pageNumber === dotts ? (
          <span key={i}> {pageNumber} </span>
        ) : (
          <Link href={`/users?page=${pageNumber}`}
            className={pageNumber === currentPage ? styles.pagination__active : styles.pagination__noActive}>
            {pageNumber}
          </Link>
        )
      )}
    </div>
  )
}

