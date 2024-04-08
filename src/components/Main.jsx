import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Main({ cardCount, setCardCount, currentPage, itemsPerPage }) {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const generateCards = () => {
    const newCards = [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, cardCount);
    for (let i = startIndex; i < endIndex; i++) {
      const cardId = uuidv4();
      newCards.push(
        <Col key={cardId} className="mt-5">
          <Card style={{ width: "14rem" }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                Comment
                {cardId.length > 10 ? cardId.slice(0, 5) + "..." : cardId}
                <IoIosCloseCircleOutline
                  className="fs-3 text-danger icon-close"
                  onClick={() => handleCards(cardId)}
                />
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Container className="text-center">
                <Button variant="primary" onClick={() => setShowModal(true)}>
                  Show Modal
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    setCards(newCards);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    generateCards();
  }, [cardCount, currentPage]);

  const handleCards = (cardId) => {
    const newCards = cards.filter((card) => card.key !== cardId);
    setCardCount(cardCount - 1);
    setCards(newCards);
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <img src="./img/loading.gif" width={100}></img><span>Loading...</span>
      </Container>
    );
  }
  const renderContent = () => {
    if (cards.length === 0) {
      return (
        <div className="d-flex justify-content-center align-items-center fs-1 text-primary">
          There is no item
        </div>
      );
    } else {
      return <Row>{cards}</Row>;
    }
  };

  return (
    <Container>
      {renderContent()}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Main;
