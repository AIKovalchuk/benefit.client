import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

import './styles/app.scss'

import Main from './components/pages/main/Main'
import LogIn from './components/pages/auth/login/LogIn'
import SigUp from './components/pages/auth/SigUp'

const App = () => (
    <IconContext.Provider value={{ color: 'white', className: 'global-class-name' }}>
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LogIn />
                </Route>
                <Route exact path="/sigup">
                    <SigUp />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    </IconContext.Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
