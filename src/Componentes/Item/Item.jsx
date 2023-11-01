import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PedidoCantidad from '../PedidoCantidad';

const Item = ({id, titulo, descripcion, precio}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{id} - {titulo}</Card.Title>
        <Card.Text>
          {descripcion}
          <p>Precio: {precio}</p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      <PedidoCantidad></PedidoCantidad>
    </Card>
    </div>
  )
}

export default Item