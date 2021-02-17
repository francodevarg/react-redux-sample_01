import React, { Component } from 'react'
import { connect } from 'react-redux'


class Titulares extends Component {
    render() {
        return (
            <section>

                <h2>Titulares <span> {this.props.titulares.length} </span></h2>
            <div className="jugadores-contenedor">
                {
                    this.props.titulares.map(j => (
                        <article className="titular" key={j.id}>
                        <img className="jugadores__img" src={j.foto} alt={j.nombre}/>
                            <div>
                                <button className="btn--close" onClick={()=> this.props.quitarTitular(j) }>X</button>
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
    titulares : state.titulares
})

const mapDispatchToProps = dispatch => {
    return {
        //dispatching plain actions
        quitarTitular: (j) => {
            dispatch({
                type: 'QUITAR_TITULAR',
                payload: j
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Titulares);
