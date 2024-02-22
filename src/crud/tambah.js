import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function Tambah() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    imageUrl: '',
    size: [],
    color: '',
    price: ''
  });
  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'size' ? value.split(',').map(size => size.trim()) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      // Menampilkan SweetAlert untuk konfirmasi
      const confirmation = await Swal.fire({
        icon: 'question',
        title: 'Apakah Anda yakin?',
        text: 'Anda akan menyimpan data produk ini.',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Simpan',
        cancelButtonText: 'Batal'
      });

      if (confirmation.isConfirmed) {
        try {
          const response = await axios.post('http://localhost:3030/products', product);
          console.log(response.data);
          Swal.fire({
            icon: 'success',
            title: 'Sukses',
            text: 'Produk berhasil ditambahkan!',
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            window.location.href = "/";
          });
        } catch (error) {
          console.error('Error adding product:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambahkan produk. Silakan coba lagi nanti!',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Semua data harus diisi!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const validateInputs = () => {
    const { title, description, imageUrl, size, color, price } = product;
    return title.trim() !== '' && description.trim() !== '' && imageUrl.trim() !== '' &&
      size.length > 0 && color.trim() !== '' && price.trim() !== '';
  };

  return (
    <>
      <Row className="justify-content-center align-items-center vh-90">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Tambah Produk</h2>
              {error && <p className="text-danger">{error}</p>}
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group controlId="formTitle">
                  <Form.Label>Judul</Form.Label>
                  <Form.Control type="text" name="title" value={product.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control as="textarea" rows={2} name="description" value={product.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                  <Form.Label>URL Gambar</Form.Label>
                  <Form.Control type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control type="number" name="price" value={product.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formSize">
                  <Form.Label>Ukuran (pisahkan dengan koma, contoh: S, M, L)</Form.Label>
                  <Form.Control type="text" name="size" value={product.size.join(',')} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formColor">
                  <Form.Label>Warna</Form.Label>
                  <Form.Control type="text" name="color" value={product.color} onChange={handleChange} />
                </Form.Group>
                <div className="text-center my-2">
                  <Button variant="primary" type="submit" block>
                    Tambah
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Tambah;
