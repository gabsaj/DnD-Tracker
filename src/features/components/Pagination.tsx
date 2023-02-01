interface PaginationProps {
  currentPage: number;
  spp: number;
  spellsCount: number;
  handlePaginate: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, spellsCount, spp, handlePaginate } = props;
  const pageNumbers = [];
  const totalPages = Math.ceil(spellsCount / spp);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() =>
          currentPage === 1 ? undefined : handlePaginate(currentPage - 1)
        }
      >
        &#10094;
      </button>
      {pageNumbers.map((n, idx) => (
        <button key={idx} onClick={() => handlePaginate(n)}>
          {n}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage === 2 ? undefined : handlePaginate(currentPage + 1)
        }
      >
        &#10095;
      </button>
    </div>
  );
};

export default Pagination;
