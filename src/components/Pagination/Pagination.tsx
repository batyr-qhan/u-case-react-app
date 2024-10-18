import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === 2 || i === 3 || i === totalPages || i === totalPages - 1) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      } else if (i === 4 && currentPage > 4) {
        pages.push(<span key="dots1">...</span>);
      } else if (i === currentPage && currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className="active"
          >
            {i}
          </button>
        );
      } else if (i === totalPages - 2 && currentPage < totalPages - 3) {
        pages.push(<span key="dots2">...</span>);
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;