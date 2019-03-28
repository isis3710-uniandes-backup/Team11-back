import React, {Component} from 'react';
import perfilImage from '../../assets/img/user.png'
import axios from 'axios'

class Perfil extends Component {

    constructor(props){
        super(props);
        this.state={
            grupos:[],
            grupo:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/Fansubs/')
        .then((response) => {
            var group = response.data;
            this.setState({grupos:group});
        })
    }

    render() {
        let buttonGrupo1=(
            <div className="row">
                <p>
                    Grupo:
                </p>
                <select className="col-4 form-control" id="selectGenero">
                    <option value=""> </option>
                    {this.state.grupos.map((el)=><option value={el.id} key={el.id}>{el.nombre}</option>)}
                </select>
                <button type="button" className="btn btn-info">Unirse</button>   
            </div>
        );
        let buttonGrupo2=(
            <div className="text-left">
                <button type="button" className="btn btn-info">Crear</button>   
                <p color="red">Se necesita estar en un grupo para publicar releases</p>
            </div>
        );
        if(this.state.grupo!==""){
            buttonGrupo1=(
                <div className="row">
                    <p> 
                        Grupo: {this.state.grupo}
                    </p>
                    <button type="button" className="btn btn-info">Salir</button>   
                </div>  
            );
            buttonGrupo2=(
                <div className="text-left">
                    <button type="button" className="btn btn-info">Publicar release</button>   
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={perfilImage} height="200px"/>
                    </div>
                    <div className="col-9">
                        <h4 className="text-left">Usuario Global</h4>
                        {buttonGrupo1}
                        {buttonGrupo2}
                    </div>
                </div>
            </div>
        )
    }

};

export default Perfil;