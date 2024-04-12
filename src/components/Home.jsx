import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [cardCount, setCardCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(cardCount / itemsPerPage);

  return (
    <div>
      <Header cardCount={cardCount} />
      <Main
        cardCount={cardCount}
        setCardCount={setCardCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
