import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ScrollableCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollableCards, setScrollableCards] = useState([]);
  const [hrefCards, setHrefCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/scrollable")
      .then((response) => setScrollableCards(response.data))
      .catch((error) => console.error("terjadi kesalahan", error));

    axios.get("http://localhost:3030/products")
      .then((response) => setHrefCards(response.data))
      .catch((error) => console.error("terjadi kesalahan", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNavigation("next");
    }, 5000);

    return () => clearInterval(interval);
  },);

  const handleDeleteHref = (index) => {
    const idToDelete = hrefCards[index].id;
    axios
      .delete(`http://localhost:3030/products/${idToDelete}`)
      .then(() => {
        const updatedHrefCards = [...hrefCards];
        updatedHrefCards.splice(index, 1);
        setHrefCards(updatedHrefCards);
      })
      .catch((error) => console.error("Gagal menghapus data:", error));
  };
  
  const handleNavigation = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? scrollableCards.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === scrollableCards.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="scrollable-container">
      <div className="scrollable-cards">
        {scrollableCards.map((card, index) => (
          <Card
            key={index}
            className={`scrollable-card ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="image-container">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fluid
                className="custom-image"
              />
              {index === currentIndex && (
                <div className="navigation-buttons">
                  <Button
                    variant="light"
                    className="prev-button"
                    onClick={() => handleNavigation("prev")}
                    style={{ cursor: "default" }}
                  >
                    {"< Prev"}
                  </Button>
                  <Button
                    variant="light"
                    className="next-button"
                    onClick={() => handleNavigation("next")}
                    style={{ cursor: "default" }}
                  >
                    {"Next >"}
                  </Button>
                </div>
              )}
            </div>
            <Card.Body className="scrollable-card-body">
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "110px 30px",
        }}
      >
        {hrefCards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              flex: "1 0 18rem",
              minWidth: "18rem",
              margin: "10px 25px",
            }}
          >
            <a
              href={`/detail/${index + 1}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={card.imageUrl}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </a>
            <Button
              variant="danger"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteHref(index);
              }}
              style={{ width: "100%" }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCard;
