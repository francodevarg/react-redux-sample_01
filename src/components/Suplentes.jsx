import React, { Component } from 'react'
import { connect } from 'react-redux'

class Suplentes extends Component {
    render() {
        return (
            <section>
                <h2>Suplentes</h2>
                <div className="jugadores-contenedor">
                    {
                        this.props.suplentes.map(j => (
                            <article className="suplente" key={j.id}>
                            <img className="jugadores__img" src={j.foto} alt={j.nombre}/>
                                <div>
                                    <button className="btn--close" onClick={()=> this.props.quitarSuplente(j)} >X</button>
                                </div>
                                <p>{j.nombre}</p>
                        </article>
                        ))
                    }
                    </div>
                </section>
        )
    }
}

const mapStateToProps = state => ({
    suplentes : state.suplentes
})
const mapDispatchToProps = dispatch => ({
    quitarSuplente(j){
        dispatch({
            type: 'QUITAR_SUPLENTE',
            payload: j
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes);
