import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditProduct() {
  const { productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imageUrl: "",
    size: [],
    color: "",
    price: "",
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isModified) {
      Swal.fire({
        icon: "warning",
        title: "Perhatian!",
        text: "Anda harus mengubah setidaknya satu bidang untuk memperbarui produk.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan menyimpan perubahan yang telah dilakukan.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:3030/products/${productId}`, product)
          .then((response) => {
            console.log("Produk berhasil diperbarui:", response.data);
            Swal.fire({
              icon: "success",
              title: "Sukses!",
              text: "Produk berhasil diperbarui!",
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              window.location.href = "/";
            });
          })
          .catch((error) => {
            console.error("Error updating product:", error);
            Swal.fire({
              icon: "error",
              title: "Gagal!",
              text: "Gagal memperbarui produk. Silakan coba lagi.",
              showConfirmButton: false,
              timer: 2000,
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: "info",
          title: "Batal",
          text: "Perubahan dibatalkan.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <Card className="mx-auto my-5 p-4" style={{ maxWidth: "900px" }}>
      <h2 className="text-center mb-4">Edit Produk</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Judul</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Judul produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Deskripsi produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="color">
          <Form.Label>Warna</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            placeholder="Warna produk"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Harga produk"
          />
        </Form.Group>
        <div className="text-center my-4">
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default EditProduct;
