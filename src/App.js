import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./Componentes/ItemListContainer/ItemListContainer";
import { Navbartop }  from "./Componentes/Navbar/Navbartop";
import { ItemDetail } from "./Componentes/ItemDetail/ItemDetail";
import { Cart } from "./Componentes/Cart/Cart";
function App() {
  return (
  <>
    <BrowserRouter>
    <Navbartop />
    <Routes>
        <Route path="*" element={<h2>Ruta no encontrada</h2>}></Route>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoria" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetail />}/>    
        <Route path="/Cart" element={<Cart />}></Route>
    </Routes>
    </BrowserRouter>
  </>
)}

export default App;
