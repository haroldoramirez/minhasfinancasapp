import React from 'react'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/cadastro-usuarios" component={CadastroUsuario}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas