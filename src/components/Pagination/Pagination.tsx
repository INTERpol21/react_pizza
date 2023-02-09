import ReactPaginate from 'react-paginate'
import styles from "./Pagination.module.scss"

type PaginationProps = {
  value: number
  onChangePage: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ onChangePage, value }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={value - 1}
  />
)

export default Pagination
     