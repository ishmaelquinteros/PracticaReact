import { useEffect, useState } from "react"
import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const productos = [
    {
        id: 1,
        titulo: "nombre1",
        descripcion: "producto1",
        precio: 10
    },
    {
        id: 2,
        titulo: "nombre2",
        descripcion: "producto2",
        precio: 20
    },
    {
        id: 3,
        titulo: "nombre3",
        descripcion: "producto3",
        precio: 30
    },            
    {
        id: 4,
        titulo: "nombre4",
        descripcion: "producto4",
        precio: 40
    }
]

export const ItemList = () => {
    const [ListaProd, setListaProd] = useState([]);
    
    useEffect(()=> {
        new Promise((respuesta) => {
          setTimeout(() => {
            respuesta(productos);
          },2000);
    }) 
    .then ((respuesta) => {
        setListaProd (respuesta)    
    })
    .catch((error) => {
        console.log(error)
    });
},[])
  
    return (
    <Container fluid>
    <Row xl="auto">
        <Col>
        <div class="d-flex flex-wrap">
        {ListaProd.map((producto, index) => (
            <div key={`${index}`}>
                <Item id={producto.id} titulo={producto.titulo} descripcion={producto.descripcion} precio={producto.precio}></Item>
            </div>   
        ))}    
    </div>
    </Col>
    </Row>
    </Container>   
        )
    }
