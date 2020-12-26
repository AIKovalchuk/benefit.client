import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

import './styles/app.scss'

import Main from './components/pages/main/Main'
import Benefits from './components/pages/benefits/Benefits'
import Auth from './components/pages/auth/Auth'

const App = () => (
    <IconContext.Provider value={{ color: 'white', className: 'global-class-name' }}>
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
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    </IconContext.Provider>
)

export default App
