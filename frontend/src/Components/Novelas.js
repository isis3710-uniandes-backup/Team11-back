import React, { Component } from 'react';
import Novela from './Novela';
const axios = require('axios');

//const getNovelas;
class Novelas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { novelas: [] };
    }

    componentDidMount() {

        axios.get('http://localhost:3001/Novelas')
            .then((response) => {
                var a = this.state;
                a.novelas = response.data;
                return a;
            })
            .then((newState) => {
                this.setState(newState)
            });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Idioma</th>
                        <th>Titulo</th>
                    </tr>
                </thead>
                {this.state.novelas.map((novela) => <tbody key={novela.id}><Novela data={novela} /></tbody>)}
            </table>
        )
    }
}

export default Novelas;