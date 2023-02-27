import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navhome = () => {
  return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Encabezado">Restorant Iftar</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#menu">Menú</Nav.Link>
            <Nav.Link href="#reserva">Reserva</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navhome