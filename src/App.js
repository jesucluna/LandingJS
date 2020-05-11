import React from 'react';
import './App.min.css';
import Landing from './components/Landing';
import Home from './components/Home';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/landing" component={Landing} />
                </Switch>
            </div>
            <div className="men">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item"><NavLink className="btn btn-dark " to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="btn btn-dark" to="/landing">Do you want enjoy it?</NavLink></li>
                </ul>
            </div>
        </BrowserRouter>

    );
}


export default App;