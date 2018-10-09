import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home';
import Contact from '../page/Contact';
import About from '../page/About';

const Main = () => (
    <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/sobre' component={About}></Route>
        <Route path='/contato' component={Contact}></Route>
    </Switch>
);
export default Main;