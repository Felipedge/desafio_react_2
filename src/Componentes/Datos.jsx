import Boton from "./Boton";

const Datos = ({ password, setPassword, name, setName }) => {
    return (
        <>
            <form>
                <div className="form-group">

                    <input className="form-control" name="Nombre" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                    <input className="form-control" name="Contraseña" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password === "252525" ? <div><h1>Te damos la bienvenida {name}</h1><Boton /></div> : <p>Contraseña</p>}

            </form>
        </>
    );
};
export default Datos