import {Nav, Navbar} from 'react-bootstrap';
import "../css/typography.css";
import "../css/spacing.css";

function Navigation() {
  return (
    <header className="margin-4">
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
      <Navbar.Brand className="brand" href="#home">Porfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <Nav.Link href="#home"><span className="navItem">Home</span></Nav.Link>
              <Nav.Link href="#about"><span className="navItem">About</span></Nav.Link>
              <Nav.Link href="#contact"><span className="navItem">Contact</span></Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Navigation;
