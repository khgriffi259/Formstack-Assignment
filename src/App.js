import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.css'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';

const App = () => 
    <Switch>
      <Route exact path="/" component={Home} />1
    </Switch>

export default App;
