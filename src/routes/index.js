import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../containers/Home';
import About from '../containers/About';

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

