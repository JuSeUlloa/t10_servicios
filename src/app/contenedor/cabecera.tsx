import logo from '../../assets/images/React.png';
import { Link } from 'react-router-dom';
export const Cabecera = () => {

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt='noFoto' style={{height:"50px"}}/> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Servicios</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Colombia
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/region">Regiones</Link></li>
                                <li><Link className="dropdown-item" to="/department/0">Departamentos</Link></li>
                                <li><Link className="dropdown-item" to="/cities">Ciudades</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/aboutMe" tabIndex={-1} aria-disabled="true">Acerca De</Link>
                        </li>
                    </ul>

                    <span className='nav-item'>
                      <Link  to="/login" className='nav-link text-white'>Inicio de Sesion</Link>
                    </span>
                </div>
            </div>
        </nav>
    );

}