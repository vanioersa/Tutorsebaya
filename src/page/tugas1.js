import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ScrollableCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollableCards, setScrollableCards] = useState([]);
  const [hrefCards, setHrefCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4; // Ubah jumlah item per halaman di sini

  useEffect(() => {
    axios
      .get("http://localhost:3030/scrollable")
      .then((response) => setScrollableCards(response.data))
      .catch((error) => console.error("terjadi kesalahan", error));

    axios
      .get("http://localhost:3030/products")
      .then((response) => setHrefCards(response.data))
      .catch((error) => console.error("terjadi kesalahan", error));
  }, []);

  useEffect(() => {
    if (currentIndex === 0 && scrollableCards.length > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, scrollableCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNavigation("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    const lastIndex = scrollableCards.length - 1;
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? lastIndex : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === lastIndex ? 0 : prevIndex + 1
      );
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/edit/${id}`;
  };

  const handleDetail = (id) => {
    window.location.href = `/detail/${id}`;
  };

  const totalPages = Math.ceil(hrefCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, hrefCards.length);
  const currentCards = hrefCards.slice(startIndex, endIndex);

  const handleChangePage = (page) => {
    setCurrentPage(page);
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
              <Card.Text style={{ position: "relative" }}>
                {card.text}
                <Button
                  variant="primary"
                  onClick={() => handleEdit(card.id)}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "80px",
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleDetail(card.id)}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                >
                  Detail
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px 0",
          maxWidth: "1500px",
          padding: "0 15px",
        }}
      >
        {currentCards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "calc(50% - 20px)",
              margin: "5px 10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <a
              href={`/detailproduct/${card.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                cursor: "default",
              }}
            >
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={card.imageUrl}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {card.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <Button
                variant="primary"
                onClick={() =>
                  (window.location.href = `/editproduct/${card.id}`)
                }
                style={{ margin: "0 5px", width: "100px" }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteHref(index + startIndex);
                }}
                style={{ margin: "0 5px", width: "100px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "primary" : "light"}
            onClick={() => handleChangePage(page)}
            style={{ margin: "0 5px" }}
          >
            {page}
          </Button>
        ))}
      </div>

      <div style={{ width: "100%", textAlign: "center", margin: "10px" }}>
        <Button
          variant="success"
          onClick={() => (window.location.href = "/tambah")}
          style={{
            width: "300px",
            height: "50px",
            fontSize: "24px",
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ScrollableCard;
