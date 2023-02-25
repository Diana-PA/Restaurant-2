import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Reserva() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su nombre y apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cantidad de personas</Form.Label>
        <Form.Control type="password" placeholder="Cantidad de personas" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Reserva;