import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";

function NavTabsExample() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <Card
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "100",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          marginBottom: "10px",
        }}
      >
        <Card.Header className="d-flex justify-content-between align-items-center text-dark">
          <div className="d-flex align-items-center">
            <Image
              src="https://png.pngtree.com/png-vector/20220930/ourlarge/pngtree-online-shopping-logo-with-cart-icon-png-image_6239055.png"
              alt="Logo"
              width="50"
              height="50"
              roundedCircle
              style={{ marginRight: "10px" }}
            />
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Elegance Apparel
            </span>
          </div>
          <Nav
            variant="tabs"
            defaultActiveKey="#first"
            className="d-none d-sm-flex"
          >
            {" "}
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/"
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/data"
              >
                Data
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/About"
              >
                Tentang kami
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="link"
                style={{
                  color: "black",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontSize: "1rem",
                  border: "none",
                  padding: "0",
                }}
                onClick={logout}
              >
                Keluar
              </Button>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Header className="d-flex justify-content-end align-items-center text-dark d-block d-sm-none">
          {" "}
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/"
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/data"
              >
                Data
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  color: "black",
                  cursor: "default",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
                href="/About"
              >
                Tentang kami
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="link"
                style={{
                  color: "black",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontSize: "1rem",
                  border: "none",
                  padding: "0",
                }}
                onClick={logout}
              >
                Keluar
              </Button>
            </Nav.Item>
          </Nav>
        </Card.Header>
      </Card>
      <div style={{ paddingTop: "75px" }}></div>
    </>
  );
}

export default NavTabsExample;
