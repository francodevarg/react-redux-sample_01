import React, { Component } from 'react'
import {connect} from 'react-redux'

class Jugadores extends Component {

    render() {
        return (
            <div>
                <section>
                    <h2>Jugadores <span> {this.props.jugadores.length} </span></h2>
                    <div className="jugadores-contenedor">
                    {this.props.jugadores.map((j) => (
                        <article key={j.id}>
                            <img className="jugadores__img" src={j.foto} alt={j.nombre}/>
                                <h3>{j.nombre}</h3>
                                <div>
                                    <button className="btn-jugador btn--titular" onClick={() => this.props.agregarTitular(j)}>Titular</button>
                                    <button className="btn-jugador btn--suplente" onClick={() => this.props.agregarSuplente(j)}>Suplente</button>
                                </div>
                        </article>
                    ))

                    }
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = (dispatch) => {
    return {
        agregarTitular: (j) => {
            dispatch({
                type: "AGREGAR_TITULAR",
                payload: j
            })
        },
        agregarSuplente: (j) => {
            dispatch({
                type: "AGREGAR_SUPLENTE",
                payload: j
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Jugadores)
