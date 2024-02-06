import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ScrollableCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollableCards, setScrollableCards] = useState([]);
  const [hrefCards, setHrefCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/scrollable")
      .then((response) => response.json())
      .then((data) => setScrollableCards(data))
      .catch((error) => console.error("Error fetching scrollable cards:", error));

    fetch("http://localhost:3030/products")
      .then((response) => response.json())
      .then((data) => setHrefCards(data))
      .catch((error) => console.error("Error fetching href cards:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNavigation("next");
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
          <a
            key={index}
            href={`/${index + 1}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              flex: "1 0 18rem",
              minWidth: "18rem",
              margin: "10px 25px",
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
        ))}
      </div>
    </div>
  );
};

export default ScrollableCard;
