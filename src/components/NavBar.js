import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from '../icon.jpg'

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' sticky = 'top'>
      <Container>
       
        <Navbar.Brand > Carbon Footprint </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="/information/deforestaion">Deforestation</NavDropdown.Item>
              <NavDropdown.Item href="/information/sustainable-development">Sustainable Development Goals</NavDropdown.Item>
              <NavDropdown.Item href="/information/climate">Climate Changes</NavDropdown.Item>
              <NavDropdown.Item href="/information/references">References</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;