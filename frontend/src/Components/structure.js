import React, { Component } from 'react';
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
        this.state = { Vista: 'Home' }

        this.toNovelas = this.toNovelas.bind(this);
        this.toSeriesPopulares = this.toSeriesPopulares.bind(this);
        this.toFaq = this.toFaq.bind(this);
        this.toContactenos = this.toContactenos.bind(this);

    }

    toHome=()=>{
        this.setState({Vista:'Home'});
    }

    toPerfil=()=>{
        this.setState({Vista:'Perfil'});
    }

    toNovelas() {
        this.setState({ Vista: 'Novelas' })
    }

    toSeriesPopulares() {
        this.setState({ Vista: 'SeriesPop' })
    }

    toFaq() {
        this.setState({ Vista: 'Faq' })
    }

    toContactenos() {
        this.setState({ Vista: 'Contactenos' })
    }

    render() {
        let nav = <Navbar perfil={this.toPerfil} home={this.toHome} novela={this.toNovelas} series={this.toSeriesPopulares} faq={this.toFaq} contactenos={this.toContactenos} />
        switch (this.state.Vista) {
            case "Novelas":
                return (
                    <div>
                        {nav}
                        <Novelas/>
                    </div>
                );

            case 'SeriesPop':
                return (
                    <div>
                        {nav}
                        <SeriesPops/>
                    </div>
                );

            case 'Faq':
                return (
                    <div>
                        {nav}
                        <Faq />
                    </div>
                );

            case 'Contactenos':
            return (
                <div>
                    {nav}
                    <Contactenos />
                </div>
            );
            case 'Home':
            return (
                <div>
                    {nav}
                    <Home />
                </div>
            );
            case 'Perfil':
            return (
                <div>
                    {nav}
                    <Perfil />
                </div>
            );
            default:
                console.log(this.state.Vista);
                return (
                    <div>
                        {nav}
                        <p>Hola</p>
                    </div>
                );
                break;
        }
    }
}

export default Vista;