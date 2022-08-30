import Datos from "./Componentes/Datos";
import {useState} from 'react';
import Encabezado from "./Componentes/Titulo";

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <Encabezado titulo="Ingresar Nombre y Contraseña para ingresar" />
      <Datos
        name={name} setName={setName}
        password={password} setPassword={setPassword} />
    </>
  );
}
export default App;