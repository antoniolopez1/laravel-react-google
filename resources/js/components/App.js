import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginGoogle from './LoginGoogle';

function App() {
    return (
        <div>
         <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth/google" component={LoginGoogle} />
            </Switch>
         </BrowserRouter>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'))
