import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the database
    axios
      .get("http://localhost:3030/scrollable")
      .then((response) => {
        const fetchedImages = response.data.map((item) => item.imageUrl);
        setImages(fetchedImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <div className="about-text">
            <h1 className="about-heading">Tentang Kami</h1>
            <p>
              Selamat datang di "Elegance Apparel", tempat di mana keanggunan
              dan profesionalisme bertemu dalam setiap jahitan. Kami adalah
              perajin baju formal terkemuka yang menempatkan kualitas dan desain
              sebagai prioritas utama.
            </p>
            <p>
              Setiap pakaian yang kami hasilkan adalah hasil dari dedikasi dan
              perhatian terhadap detail. Kami memilih bahan berkualitas tinggi
              dan memperhatikan setiap jahitan untuk memastikan bahwa produk
              kami tidak hanya tahan lama, tetapi juga memberikan kenyamanan
              maksimal kepada pemakainya.
            </p>
            <p>
              Dari seragam kantor hingga gaun pesta, setiap koleksi kami
              dirancang untuk memancarkan kepercayaan diri dan keanggunan. Kami
              percaya bahwa pakaian tidak hanya sekadar penutup tubuh, tetapi
              juga merupakan ekspresi dari kepribadian dan sikap Anda terhadap
              dunia.
            </p>
            <p>
              Kami juga memahami bahwa pakaian bukanlah hanya tentang tampilan
              luar, tetapi juga tentang kenyamanan dan keselarasan dengan gaya
              hidup Anda. Oleh karena itu, kami selalu berusaha untuk
              menghadirkan desain yang fungsional dan fleksibel, cocok untuk
              berbagai kesempatan dan situasi.
            </p>
            <p>
              Dengan penuh semangat, kami mengundang Anda untuk menjelajahi
              koleksi kami dan menemukan pakaian yang sempurna untuk menemani
              setiap momen penting dalam hidup Anda.
            </p>
            <p>
              Kami sangat berkomitmen untuk memberikan pengalaman berbelanja
              yang luar biasa kepada pelanggan kami. Dengan layanan pelanggan
              yang ramah dan profesional, kami siap membantu Anda dalam setiap
              langkah perjalanan memilih pakaian yang tepat.
            </p>
            <p>
              Sebagai bagian dari komitmen kami terhadap keberlanjutan, kami
              juga berupaya untuk menggunakan bahan-bahan yang ramah lingkungan
              dan proses produksi yang bertanggung jawab. Dengan demikian, Anda
              tidak hanya mendapatkan pakaian berkualitas tinggi, tetapi juga
              turut berkontribusi dalam menjaga kelestarian lingkungan.
            </p>
            <p>
              Kami percaya bahwa setiap orang berhak merasakan keistimewaan
              memakai pakaian formal yang sesuai dengan kepribadian dan gaya
              hidupnya. Itulah mengapa kami terus berinovasi dan berusaha untuk
              memenuhi kebutuhan dan ekspektasi pelanggan kami.
            </p>
            <p>
              Terima kasih telah mempercayakan "Elegance Apparel" sebagai mitra
              pilihan Anda dalam urusan pakaian formal. Kami berharap dapat
              terus melayani Anda dengan yang terbaik dan menjadi bagian dari
              momen-momen istimewa dalam hidup Anda.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="image-container">
          <img
              src={images[currentIndex]}
              alt="About Us"
              className="img-fluid about-imageeee"
            />
            <p>
              Di "Elegance Apparel", kami menghadirkan baju formal dengan
              keanggunan yang tiada tara. Setiap potongan dan desain kami
              dipilih dengan cermat untuk memastikan bahwa Anda tidak hanya
              tampil cantik, tetapi juga merasa percaya diri dan nyaman setiap
              saat.
            </p>
            <p>
              Kami memahami bahwa setiap orang memiliki gaya uniknya sendiri.
              Oleh karena itu, koleksi kami mencakup berbagai gaya dan warna,
              dari yang klasik hingga yang modern, untuk memenuhi kebutuhan dan
              preferensi beragam pelanggan kami.
            </p>
            <p>
              Apakah Anda mencari seragam kantor yang profesional atau gaun
              pesta yang elegan, Anda akan menemukan apa yang Anda cari di
              "Elegance Apparel". Dengan pilihan yang luas dan kualitas yang tak
              tertandingi, kami siap membantu Anda menemukan pakaian yang
              sempurna untuk setiap kesempatan.
            </p>
            <p>
              Bergabunglah dengan kami hari ini dan temukan pengalaman
              berbelanja yang tak terlupakan di "Elegance Apparel". Kami tidak
              hanya menawarkan pakaian, tetapi juga memberikan pengalaman yang
              menyenangkan dan memuaskan kepada setiap pelanggan kami.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
