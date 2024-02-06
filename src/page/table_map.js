function Table_map() {
  const makanans = [
    {
      nama: "Soto",
      harga: 12000,
    },
    {
      nama: "Bakso",
      harga: 10000,
    },
    {
      nama: "Mie Ayam",
      harga: 7000,
    },
    {
      nama: "Nasi Goreng",
      harga: 15000,
    },
  ];

  const total_bayar = makanans.reduce((total_bayar, makanan) => total_bayar + makanan.harga, 0);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Daftar Makanan</h2>
      <table border={1}>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans
            .filter((makanan) => makanan.harga < 11000)
            .map((makanan, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.harga}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1>Total Harga: {total_bayar}</h1>
      <br />
    </div>
  );
}

export default Table_map;
