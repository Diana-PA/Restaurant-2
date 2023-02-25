import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

function Encabezado() {
  return (
    <div style={{backgroundColor: 'black' }}>
    <Container>
      <br />
      <Row>
        <Col sm={8}>
          <Image 
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          fluid
          rounded
          />
        </Col>
        <Col sm={4}>
            <br />
            <h1 >Iftar</h1>
            <br />
            <h4 style={{flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"50px"}}>Somos un restorant de comida árabe. Trabajamos para dar a conocer los mejor de las tradiciones culinarias del Medio Oriente, respetando las preparaciones, ingredientes y sabores propios de su cultura.</h4>
        </Col>
      </Row>
      <br />
    </Container>
    </div>
  )
}

export default Encabezado