import { Link } from 'react-router-dom'
function Encabezado(){
    return(
        <div>
            <h1>Programación III</h1>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/contacto'>contacto</Link>
                </li>
                <li>
                <Link to='/productos'>productos</Link>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Encabezado;