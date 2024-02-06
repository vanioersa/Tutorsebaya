import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function NavTabsExample() {
  return (
    <Card>
      <Card.Header className="text-blue"> {/* Tambahkan class text-white di sini */}
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="/">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Daftar">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/List">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}

export default NavTabsExample;
