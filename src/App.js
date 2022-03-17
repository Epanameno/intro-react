import Inicio from "./inicio";
import Encabezado from "./encabezado";
import {Routes, Route } from 'react-router-dom';
import Contacto from "./contacto";
import Productos from "./productos";

function App() {
  return (
    <>
    <Encabezado />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
    </>
  );
}

export default App;
