import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/app.scss'

import Main from './components/pages/main/Main'

const App = () => (
    <Router>
        <Switch>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
