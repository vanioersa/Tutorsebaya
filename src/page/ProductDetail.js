import React from "react";
import { Card } from "react-bootstrap";

const ProductDetail = ({ match }) => {
  const { Id } = match.params;

  const products = [
    {
      "id": 1,
      "title": "Baju Elegan",
      "description": "Baju ini memiliki desain yang elegan dan nyaman dipakai sehari-hari.",
      "imageUrl": "https://down-id.img.susercontent.com/file/8824c52c4fe12cc901b98c3065bcd57b",
      "size": ["M", "L", "XL"],
      "color": "Red",
      "price": "50,000"
    },
    {
      "id": 2,
      "title": "Baju Warna Cerah",
      "description": "Baju ini hadir dengan warna-warna cerah yang cocok untuk suasana santai.",
      "imageUrl": "https://id-test-11.slatic.net/p/5798bcf3c828c74a3124d243192b065a.jpg",
      "size": ["M", "L", "XL", "XXL"],
      "color": "Yellow",
      "price": "45,000"
    },
    {
      "id": 3,
      "title": "Baju Multi Fungsi",
      "description": "Baju ini terbuat dari bahan berkualitas tinggi dan cocok untuk berbagai aktivitas.",
      "imageUrl": "https://lzd-img-global.slatic.net/g/shop/9acd1d8d796b2c05087b79c0a210b88a.png_960x960q80.png_.webp",
      "size": ["M", "L", "XL", "XXL"],
      "color": "Green",
      "price": "55,000"
    },
    {
      "id": 4,
      "title": "Baju Kasual & Formal",
      "description": "Baju ini adalah pilihan tepat untuk penampilan kasual maupun formal.",
      "imageUrl": "https://down-id.img.susercontent.com/file/05943dcb56898a590870b77807676330",
      "size": ["M", "L", "XL"],
      "color": "Blue",
      "price": "60,000"
    }
  ];

  const product = products.find(product => product.id === parseInt(Id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5px",
      }}
    >
      <Card style={{ maxWidth: "700px" }}>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ width: "100%", maxHeight: "350px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Size: {product.size.join(", ")}</Card.Text>
          <Card.Text>Color: {product.color}</Card.Text>
          <Card.Text>Price: Rp {product.price}</Card.Text>
          <div className="d-grid">
            <a href="/" className="btn btn-primary">
              Back
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
