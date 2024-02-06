import Table from 'react-bootstrap/Table';

function List() {
  const cars = ["BMW", "Ayla", "Volvo"];
  const users = [
    {
      nama: "Andi",
      username: "Andi 10",
      email: "email@gmail.com",
    },
    {
      nama: "Wahyu",
      username: "Wahyu10",
      email: "email@gmail.com",
    },
    {
      nama: "Chandra",
      username: "Chandra10",
      email: "email@gmail.com",
    },
    {
      nama: "Rahma",
      username: "Rahma10",
      email: "email@gmail.com",
    },
  ];

  return (
    <>
      <h2>Car</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>My Car Is {car}</li>
        ))}
      </ul>
      <h2>User</h2>
      <Table striped>
      <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, no) => (
            <tr>
              <td>{no + 1}.</td>
              <td>{user.nama}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
