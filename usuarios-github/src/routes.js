import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { BusquedaUsuariosComponent } from "./componentes/busquedaDeUsuarios/busquedaDeUsuariosComponent"
import { PerfilUsuario } from "./componentes/perfilUsuario/perfilUsuarioComponent"

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/busquedaUsuarios" component={BusquedaUsuariosComponent} />
            <Route path="/usuario/:nombre" component={PerfilUsuario} />
            <Route render={() => <Redirect to="/busquedaUsuarios" />} />
        </Switch>
    </Router>
)