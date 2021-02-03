import React, { Component } from 'react'
import Suplentes from './Suplentes'
import Titulares from './Titulares'

class EquipoSeleccionado extends Component {
    render() {
        return (
            <div>
                <Titulares></Titulares>
                <Suplentes></Suplentes>
            </div>
        )
    }
}

export default EquipoSeleccionado
