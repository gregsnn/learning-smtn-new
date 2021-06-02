import React from 'react'

import { childrenWithProps } from '../../utils/utility'

const Pai = props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* -{props.children}- se fosse objeto seria usado "this.props.children" */}
            {childrenWithProps(props)}
        </ul>
    </div>

export default Pai