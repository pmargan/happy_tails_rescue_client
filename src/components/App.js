import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import {
  Admin,
  About,
  Animal,
  Contact,
  Foster,
  Help,
  Home,
  Programs,
  Vets,
  Volunteer,
  Animals,
  Adopt,
  GoldenTails
} from './pages'

import '../stylesheets/App.scss'

function App() {

  const [redirect, setRedirect] = useState(null)

  const redirectFunc = (val) => {
    setRedirect(val)
  }

  return (
    <div className="App">
      <Router>
        <Header />

        <Main redirectFunc={redirectFunc} redirect={redirect} setRedirect={setRedirect} >
          <Switch>
            <Route exact path="/">
              <About redirect={redirectFunc} />
            </Route>
            <Route path="/admin">
              <Admin redirect={redirectFunc} />
            </Route>
            {/* <Route path="/about">
              <About redirect={redirectFunc} />
            </Route> */}
            <Route path="/adopt">
              <Adopt redirect={redirectFunc} />
            </Route>
            <Route path="/programs">
              <Programs redirect={redirectFunc} />
            </Route>
            <Route path="/foster">
              <Foster redirect={redirectFunc} />
            </Route>
            <Route path="/volunteer">
              <Volunteer redirect={redirectFunc} />
            </Route>
            <Route path="/help">
              <Help redirect={redirectFunc} />
            </Route>
            <Route path="/vets">
              <Vets redirect={redirectFunc} />
            </Route>
            <Route path="/contact">
              <Contact redirect={redirectFunc} />
            </Route>
            <Route exact path="/animals">
              <Animals redirect={redirectFunc} />
            </Route>
            <Route path="/animal/:id">
              <Animal redirect={redirectFunc} />
            </Route>
            <Route path="/goldenTails">
              <GoldenTails redirect={redirectFunc} />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
