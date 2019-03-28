import React from 'react';
import bilbo from '../../assets/img/bilbo.PNG';
import perfilImage from '../../assets/img/user.png'

const Navbar = (props) => (
    <div>
        <div className="row text-center">
            <img src={bilbo} onClick={props.home} id="titulo"></img>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a onClick={props.home} className="navbar-brand" href="#">Inicio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={props.novela}>Novelas <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={props.series}>Series Populares</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Acerca de Nosotros
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#" onClick={props.faq}>FAQ</a>
                            <a className="dropdown-item" href="#" onClick={props.contactenos}>Contactenos</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ADMIN
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#" onClick={props.manejoUsuarios}>Manejo Usuarios</a>
                            <a className="dropdown-item" href="#" onClick={props.manejoGeneros}>Manejo Generos</a>
                            <a className="dropdown-item" href="#" onClick={props.manejoNovelas}>Manejo Novelas</a>
                            <a className="dropdown-item" href="#" onClick={props.manejoGrupos}>Manejo Grupos</a>
                            <a className="dropdown-item" href="#" onClick={props.manejoAutores}>Manejo Autores</a>
                            <a className="dropdown-item" href="#" onClick={props.manejoRecomendaciones}>Manejo Recomendaciones</a>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={props.registro}>Registrarse</a>
                    </li>
                    <li className="nav-item">
                        <div className="row">
                            <a className="nav-link" href="#" onClick={props.perfil}>Perfil</a>
                            <img src={perfilImage} height="40px" onClick={props.perfil} id="perfilPequeño"></img>
                        </div>                </li>
                </ul>
            </div>
        </nav>
    </div>

);

export default Navbar;

/* <form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form> */