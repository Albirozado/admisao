"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigatiobar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top" >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use "ms-auto" class to align items to the right */}
            <NavDropdown title="Exames" id="basic-nav-dropdown" style={{fontWeight: "600"}}>
              <div style={{backgroundColor: "#f8f9fa"}}>
              <NavDropdown.Item href="/exames/uem/portugues" className='no-hover' style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Universidade E. Mondlane</NavDropdown.Item>
              <NavDropdown.Item href="/exames/up/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>
                Universidade Pedagogica
              </NavDropdown.Item>
              <NavDropdown.Item href="/exames/up/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Universidade J. Chissano</NavDropdown.Item>
              <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>
                Universidade J. Chissano
              </NavDropdown.Item>

              </div>
            </NavDropdown>
            <Nav.Link href="/material" style={{fontWeight: "600"}} >Material & Livros</Nav.Link>
            <Nav.Link href="/blog" style={{fontWeight: "600"}}>Blog</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigatiobar;
