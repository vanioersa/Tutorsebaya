import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditProduct() {
  const { Id_saja } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    title: "",
    text: "",
    imageUrl: "",
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/scrollable/${Id_saja}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [Id_saja]);

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
          .put(`http://localhost:3030/scrollable/${Id_saja}`, product)
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
      <h2 className="text-center mb-5">Edit</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Judul produk"
            required
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="text"
            value={product.text}
            onChange={handleChange}
            placeholder="Deskripsi"
          />
        </Form.Group>
        <Form.Group controlId="imageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            placeholder="ImageUrl"
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
