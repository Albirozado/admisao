"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

function navigatioBar() {


  return (

  <>
  {['md'].map((expand) => (
    <Navbar key={expand} expand={expand} className=" bg-body-tertiary mb-3">
      <Container >
        <Navbar.Brand href="/" style={{color:"#2c8385", fontWeight: "900"}}>LogoMarca</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{border: "none", fontWeight: "500", position: "relative"}} />
        
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" >
            <NavDropdown 

                title="Exames"
                id="collasible-nav-dropdown"   
                             
              >
                <div className='DropShadow'>
                <NavDropdown.Item href="/exames/uem/portugues" style={{padding: "0.5rem 1rem", fontWeight: "400", display: "block", width: "8em",  textAlign: "center", color: "#0e1d27"}}>
                      UEM
                </NavDropdown.Item>
                <NavDropdown.Item href="/exames/up/portugues" style={{padding: "0.5rem 1rem", fontWeight: "400", display: "block", width: "8rem",  textAlign: "center", color: "#0e1d27"}}>
                      UP
                </NavDropdown.Item>
                <NavDropdown.Item href="/exames/uem/portugues" style={{padding: "0.5rem 1rem", fontWeight: "400", display: "block", width: "8rem",  textAlign: "center", color: "#0e1d27"}}>
                      UJC
                </NavDropdown.Item>
                </div>


              </NavDropdown>

              <Nav.Link href="/blog"  style={{color: "#0e1d27", fontWeight: "400"}}>Blog</Nav.Link>
  
              <Nav.Link href="/material"  style={{color: "#0e1d27", fontWeight: "400"}}>Materiais & Livros</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
    
    
  
    
  );
}

export default navigatioBar;