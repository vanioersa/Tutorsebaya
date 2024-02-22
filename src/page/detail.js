import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const Detail = () => {
  const { Id } = useParams();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
      .get("http://localhost:3030/scrollable/" + Id)
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
        paddingTop: "60px",
      }}
    >
        <Card style={{ maxWidth: "700px"  }}>
          <Card.Img
            variant="top"
            src={posts.imageUrl}
            style={{ width: "700px", maxHeight: "350px" }}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{posts.title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>{posts.text}</Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Detail;
