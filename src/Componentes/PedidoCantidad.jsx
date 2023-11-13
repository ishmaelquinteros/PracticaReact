import { Carrito } from './Carrito';
import { useState } from 'react';
import { useEffect } from 'react';

export const PedidoCantidad = ({stock, count, setCount}) => {


    const [msj, setMensaje] = useState(""); 

  const onAdd = () =>{
    if (count === stock) return;
    setCount(count+1);
  }

  const onSubtract = () => {
    if (count === 0) return;
    setCount(count-1);
  }

  const checkStock = (pedido, stockunidad) => {
   if (pedido <= stockunidad){
    setStock(stock - pedido);
    setMensaje("Se agrega " + pedido + " unidad/es al carrito");
    console.log("Quedan en stock " + (stockunidad - pedido) + " unidad/es");
  } else{
    setMensaje("Lo sentimos no hay stock suficiente");
  }  
  }
  return (
    <>
      <div>
        <button onClick={onAdd}>+</button>
        <label>{count}</label>
        <button onClick={onSubtract}>-</button>
        <button onClick={() => checkStock (count, stock)}>Agregar a carrito</button>
        <Carrito mensaje={msj}></Carrito>
      </div>
      
    </>
  );
}

export default PedidoCantidad;
