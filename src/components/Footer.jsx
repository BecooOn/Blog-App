import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

function Footer({ currentPage, setCurrentPage, totalPages }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = windowWidth <= 520 ? "sm" : "lg";

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

  return (
    <div className="d-flex justify-content-center py-4 bg-warning fixed-bottom footer">
      <Pagination size={size} className="pagination">
        {items}
      </Pagination>
    </div>
  );
}

export default Footer;
