import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setType(e) {
        this.setState({ tipo: e.target.value})
    }

    setNome(e) {
        this.setState({ nome: e.target.value})
    }

    constructor(props) {
        super(props) /* "Super" necessario */

        this.setType = this.setType.bind(this)
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr />
                <input type="text" placeholder="tipo..." value={tipo} onChange={this.setType} />  {/* com bind */}
                <input type="text" placeholder="nome..." value={nome} onChange={e => this.setNome(e)} /> {/* sem bind */}
            </div>
        )
    }
}