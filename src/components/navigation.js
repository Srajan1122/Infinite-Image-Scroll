import {Nav, Navbar} from 'react-bootstrap';

function Navigation() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
      <Navbar.Brand href="#home">Porfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Navigation;
