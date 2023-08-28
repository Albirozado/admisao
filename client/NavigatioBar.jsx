"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigatiobar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use "ms-auto" class to align items to the right */}
            <NavDropdown title="Exames" id="basic-nav-dropdown" style={{fontWeight: "600"}}>
              <div style={{backgroundColor: "#f8f9fa"}}>
              <NavDropdown.Item href="/exames/uem/portugues">Universidade E. Mondlane</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Universidade Pedagogica
              </NavDropdown.Item>
              <NavDropdown.Item href="/exames/up/portugues">Universidade J. Chissano</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/exames/uem/portugues" >
                Universidade J. Chissano
              </NavDropdown.Item>

              </div>
            </NavDropdown>
            <Nav.Link href="/material" style={{fontWeight: "600"}}>Material & Livros</Nav.Link>
            <Nav.Link href="/blog" style={{fontWeight: "600"}}>Blog</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigatiobar;
