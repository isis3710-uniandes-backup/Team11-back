import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import Novelas from './Novelas/Novelas'
import Faq from './AboutUs/faq'
import Contactenos from './AboutUs/contactenos';
import SeriesPops from './Series/SeriesPops';
import Home from './Home/Home'
import Perfil from './Usuario/Perfil'

class Vista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/novelas" exact component={Novelas}/>
                <Route path="/faq" exact component={Faq}/>
                <Route path="/contacto" exact component={Contactenos}/>
                <Route path="/series" exact component={SeriesPops}/>
                <Route path="/perfil" exact component={Perfil}/>
            </div>
        );
    }
}

export default Vista;