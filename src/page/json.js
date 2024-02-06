import React, { useState, useEffect } from "react";

const TesJson = () => {
  const [posts, setPost] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      rediract: "follow",
    };
    fetch("http://localhost:3030/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setPost(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id} </span>
            {post.title}
          </h3>
          <p>{post.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TesJson;
