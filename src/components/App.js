import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import {
  About,
  Animal,
  Contact,
  Foster,
  Help,
  Home,
  Programs,
  Vets,
  Volunteer,
  Animals
} from './pages'

import '../stylesheets/App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/programs">
              <Programs />
            </Route>
            <Route path="/foster">
              <Foster />
            </Route>
            <Route path="/volunteer">
              <Volunteer />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/vets">
              <Vets />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/animals">
              <Animals />
            </Route>
            <Route path="/animal/:id">
              <Animal />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
