function Intro(props) {
  return (
    <>
      <p className="baru">
        <strong style={{ color: "blue" }}>Nama saya:</strong> {props.nama}
      </p>
      <p className="baru">
        <strong style={{ color: "blue" }}>Sekolah:</strong> {props.sekolah}
      </p>
      <p className="baru">
        <strong style={{ color: "blue" }}>Kelas:</strong> {props.kelas}
      </p>
    </>
  );
}

export default Intro;
