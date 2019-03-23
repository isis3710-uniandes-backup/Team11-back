import React, { Component } from 'react';
import Navbar from './Navbar'
import Novelas from './Novelas'
import Faq from './faq'
import Contactenos from './contactenos';
import SeriesPops from './SeriesPops';

class Vista extends Component {
    constructor(props) {
        super(props);
        this.state = { Vista: 'Ini' }

        this.toNovelas = this.toNovelas.bind(this);
        this.toSeriesPopulares = this.toSeriesPopulares.bind(this);
        this.toFaq = this.toFaq.bind(this);
        this.toContactenos = this.toContactenos.bind(this);

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
        let nav = <Navbar novela={this.toNovelas} series={this.toSeriesPopulares} faq={this.toFaq} contactenos={this.toContactenos} />
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
            default:
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