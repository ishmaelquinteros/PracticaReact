import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Navbartop = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>Home</Link></Nav.Link>
            
            <Nav.Link>
            <Link to={'category/electronics'}>Electronicos</Link></Nav.Link>

            <Nav.Link>
            <Link to={'/category/jewelery'}>Joyeria</Link></Nav.Link>

            <Nav.Link>
            <Link to={"/category/men's-clothing"}>Roja Hombre</Link></Nav.Link>
            
            <Nav.Link>
            <Link to={"/category/women's-clothing"}>Roja Mujer</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbartop;