import ReactPaginate from "react-paginate";

export default function Pagination({
  itemsPerPage,
  totalItems,
  setItemOffset,
}) {
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    setItemOffset(newOffset);
    scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(totalItems / itemsPerPage)}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
      containerClassName="place-self-center my-12 inline-flex -space-x-px text-base h-10"
      previousLinkClassName="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
      pageLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      nextLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
      breakLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
      activeLinkClassName="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
    />
  );
}
