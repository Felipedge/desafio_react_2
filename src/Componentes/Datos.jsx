import Boton from "./Boton";

const Datos = ({ contraseña, fijarContraseña, nombre, fijarNombre }) => {
    return (
        <>
            <form>
                <div className="form-group">

                    <input className="form-control" name="Nombre" placeholder="Nombre" onChange={(e) => fijarNombre(e.target.value)} />
                    <input className="form-control" name="Contraseña" placeholder="Contraseña" onChange={(e) => fijarContraseña(e.target.value)} />
                </div>
                {contraseña === "252525" ? <div><h1>Te damos la bienvenida {nombre}</h1><Boton /></div> : <p>Contraseña</p>}

            </form>
        </>
    );
};
export default Datos