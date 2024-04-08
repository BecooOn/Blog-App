import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Footer({ currentPage, setCurrentPage, totalPages }) {
  const items = [];
for (let number = 1; number <= totalPages; number++) {
  items.push(
    <Pagination.Item
      key={number}
      active={number === currentPage}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </Pagination.Item>
  );
}

  const paginationBasic = (
    <div className="d-flex justify-content-center py-4 bg-warning fixed-bottom">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );

  return paginationBasic;
}

export default Footer;
