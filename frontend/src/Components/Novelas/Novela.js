import React from 'react';

const Novela = (props) => (
    <tr>
        <td><img src={props.data.imagen}></img></td>
        <td>{props.data.idioma}</td>
        <td>
            <p>{props.data.titulo}</p>
            <p><strong>Descripcion</strong></p>
            <p>{props.data.descripcion}</p>
        </td>
    </tr>
);

export default Novela;