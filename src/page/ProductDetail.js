import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductDetail = () => {
  const { id_product } = useParams();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
      .get("http://localhost:3030/products/" + id_product)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("terjadi kesalahan", error));
    };
    getData();
  }, []);

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
            src={posts.imageUrl}
            style={{ width: "100%", maxHeight: "350px" }}
          />
          <Card.Body>
            <Card.Title>{posts.title}</Card.Title>
            <Card.Text>{posts.description}</Card.Text>
            <Card.Text>Size: {posts.size?.join(", ")}</Card.Text>
            <Card.Text>Color: {posts.color}</Card.Text>
            <Card.Text>Harga: Rp {posts.price}</Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
};

export default ProductDetail;
