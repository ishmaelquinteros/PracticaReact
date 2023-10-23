import './App.css';
import { Carrito } from './Componentes/Carrito';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const [stock, setStock] = useState(1)

  const AsignarStock = (propStock) => {
        setStock(propStock);
  };

  useEffect (() => {
    AsignarStock(5);
  }, [])

  const checkStock = (pedido, stockunidad) => {
   if (pedido <= stockunidad){
    setStock(stock - pedido);
    <Carrito pedido={pedido}/>;
    console.log("Se agrega " + pedido + " unidad/es al carrito");
    console.log("Quedan en stock " + (stockunidad - pedido) + " unidad/es");
  } else{
    console.log("Lo sentimos no hay stock suficiente");
  }  
  }
  return (
    <div>
    <button onClick={()=> setCount(count+1)}>+</button>
    <label>{count}</label>
    <button onClick={()=> setCount(count-1)}>-</button>
    <button onClick={() => checkStock (count, stock)}>Agregar a carrito</button>
    </div>
  );
}

export default App;
