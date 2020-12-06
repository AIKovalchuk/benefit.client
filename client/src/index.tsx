import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/app.scss'

import Main from './components/pages/main/Main'
import Benefits from './components/pages/Benefits'

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/profile">
                <Benefits />
            </Route>
            <Route exact path="/anketa">
                <Benefits />
            </Route>
            <Route exact path="/benefits">
                <Benefits />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
