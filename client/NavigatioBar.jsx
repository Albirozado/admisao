"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigatiobar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top" >
      <Container>
        <Navbar.Brand href="/" className='font-semibold'>ADMISSAO.COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use "ms-auto" class to align items to the right */}
            <NavDropdown title="Exames de Admissao" id="basic-nav-dropdown"  style={{fontWeight: "600"}}>
              <div style={{backgroundColor: "#f8f9fa"}}className='shadow-lg border-[#ccc]'>
              <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Universidade E. Mondlane</NavDropdown.Item>
              <NavDropdown.Item href="/exames/up/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>
                Universidade Pedagogica
              </NavDropdown.Item>
              <NavDropdown.Item href="/exames/ujc/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Universidade J. Chissano</NavDropdown.Item>
              <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>
                Academia Militar
              </NavDropdown.Item>

              </div>
            </NavDropdown>

              <NavDropdown title="Material & Livros" id="basic-nav-dropdown" style={{fontWeight: "600"}}>
            <div style={{backgroundColor: "#f8f9fa"}} className='shadow-lg border-[#ccc]'>
                <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Ensino Medio & Superior</NavDropdown.Item>
                <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Ensino Secundario</NavDropdown.Item>
                <NavDropdown.Item href="/exames/uem/portugues" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Ensino Primario</NavDropdown.Item>
                <NavDropdown.Item href="/material/infantil" style={{marginBottom: "0.5rem", padding: "0.3rem 1rem"}}>Educacao Infantil</NavDropdown.Item>


            </div>
              </NavDropdown>

            <Nav.Link href="/blog" style={{fontWeight: "600"}}>Blog</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigatiobar;
