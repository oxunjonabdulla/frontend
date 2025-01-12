// Pagination.js
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Pagination = ({ pageCount = 0, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={Math.ceil(pageCount / 10)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
      nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
    />
  );
};
