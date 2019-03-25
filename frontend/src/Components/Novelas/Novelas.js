import React from 'react';
import Novela from './Novela';
const axios = require('axios');
//const getNovelas;
class Novelas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pagina: 0, tablasNovela: [[]] };
    }

    toPagina(p) {
        var state = this.state;
        state.pagina = p;
        this.setState(state);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/Novelas')
            .then((response) => {
                var state = this.state;
                var novelas = response.data;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                state.tablasNovela = this.getTablasNovela(novelas,5);
                return state;
            })
            .then((newState) => {
                this.setState(newState);
            });
    }

    getTablasNovela(novelas,tamanioTablasNovela) {
        let numTablas = Math.ceil(novelas.length / tamanioTablasNovela);
        let tablasNovela = [];

        for (let i = 0; i < numTablas - 1; i++) {
            tablasNovela.push(novelas.slice((i * tamanioTablasNovela), ((i + 1) * tamanioTablasNovela)));
        }
        tablasNovela.push(novelas.slice((numTablas - 1) * tamanioTablasNovela));
        return tablasNovela;
    }

    render() {
        var A = [];
        for (let i = 0; i < this.state.tablasNovela.length; i++) {
            A.push(i);
        }
        return (
            <div>
                {A.map((i) => <button key={i} onClick={() => this.toPagina(i)}>{i + 1}</button>)}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Idioma</th>
                            <th>Titulo</th>
                        </tr>
                    </thead>
                    {this.state.tablasNovela[this.state.pagina].map((novela) => <tbody key={novela.id}><Novela data={novela} /></tbody>)}
                </table>
            </div>
        )
    }
}

export default Novelas;