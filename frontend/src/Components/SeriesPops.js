import React, { Component } from 'react';
import Novelas from './Novelas';
const axios = require('axios');

//const getNovelas;
class SeriesPops extends Novelas {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/Novelas')
            .then((response) => {
                var state = this.state;
                var b = response.data;
                console.log(this.props.ranked)
                b.sort((a, b) => b.ranking - a.ranking);
                console.log('sad')

                state.novelas = b;
                return state;
            })
            .then((newState) => {
                this.setState(newState);
            });
    }
}

export default SeriesPops;