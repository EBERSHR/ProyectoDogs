import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Details from '../components/Details';
// import Detalle from '../components/Detalle';
// import Actividad from '../components/Actividad';


const AppRouters = () => {
    return (
        <Router>
            {/* <NavBar /> */}
            <Switch>
                {/* <Route exact path="/detalle" component={Detalle} />
                <Route exact path="/actividad" component={Actividad} /> */}
                <Route exact path="/details/:id">
                    <Details />
                </Route>    
                <Route exact path="/" component={Home} />
                {/* <Route path="*" component={NotFoundPage} /> */}
            </Switch>
        </Router>
    );
}

export default AppRouters;
