// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai/Pai'
import Filho from './components/Filho/Filho'

ReactDOM.render(
    <div className="meeting">
        <Pai nome="Paulo" sobrenome="Nunes">
            {/* Como passar os componentes filhos a partir da chamada */}
            <Filho nome="Pedro" />
            <Filho nome="Paula" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))