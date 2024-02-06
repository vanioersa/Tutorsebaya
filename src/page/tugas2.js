// import React from 'react';
import Table from 'react-bootstrap/Table';

function Tugas() {
  const makanans = [
    {
      nama: "Gudeg",
      harga: 25000,
    },
    {
      nama: "Tongseng",
      harga: 8000,
    },
    {
      nama: "Bakmi Goreng",
      harga: 13000,
    },
    {
      nama: "Mixue",
      harga: 15000,
    },
    {
      nama: "Siomay",
      harga: 5000,
    },
  ];

  const makan = makanans.filter((makanan) => makanan.harga < 10000);
  const total_harga = makan.reduce(
    (total, makanan) => total + makanan.harga,
    0
  );

  const total_bayar = makanans.reduce(
    (total_bayar, makanan) => total_bayar + makanan.harga,
    0
  );

  return (
    <>
      <br />
      <h3>Daftar makanan yang harganya kurang dari 10.000</h3>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>No</th>
            <th> Nama Makanan </th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makan.map((makanan, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 style={{ textAlign: "center" }}>Total Harga: {total_harga}</h3>
      <br />
      <h3>Daftar Makanan</h3>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 style={{ textAlign: "center" }}>Total Harga: {total_bayar}</h3>
      <br />
    </>
  );
}

export default Tugas;
