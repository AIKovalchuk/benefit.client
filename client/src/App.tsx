import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

import Main from './components/pages/main/Main'
import Benefits from './components/pages/benefits/Benefits'
import SignUp from './components/pages/signup/SignUp'
import LogIn from './components/pages/login/LogIn'
import FormUser from './components/pages/anketa/FormUser'

import AuthProvider from './providers/AuthProvide'

import './styles/app.scss'
import Page from './components/layout/Page'

const App = () => (
    <IconContext.Provider value={{ color: 'white', className: 'global-class-name' }}>
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/profile">
                        <Page>
                            <Benefits />
                        </Page>
                    </Route>
                    <Route exact path="/anketa">
                        <Page>
                            <FormUser />
                        </Page>
                    </Route>
                    <Route exact path="/benefits">
                        <Page>
                            <Benefits />
                        </Page>
                    </Route>
                    <Route exact path="/signup">
                        <Page>
                            <SignUp />
                        </Page>
                    </Route>
                    <Route exact path="/login">
                        <Page>
                            <LogIn />
                        </Page>
                    </Route>
                    <Route path="/">
                        <Page>
                            <Main />
                        </Page>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    </IconContext.Provider>
)

export default App
