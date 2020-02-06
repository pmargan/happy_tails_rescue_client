import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PrivateRoute from './helpers/PrivateRoute'

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
  Programs,
  Vets,
  Volunteer,
  AddAnimal,
  Adopt,
  GoldenTails,
  Register,
  Login
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
            <PrivateRoute redirect={redirectFunc} path="/admin">
              <Admin redirect={redirectFunc} />
            </PrivateRoute>
            <Route path="/register">
              <Register redirect={redirectFunc} />
            </Route>
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
            <Route path="/animal/:id">
              <Animal redirect={redirectFunc} />
            </Route>
            <Route path="/login">
              <Login redirect={redirectFunc} />
            </Route>
            <PrivateRoute redirect={redirectFunc} path="/addAnimal">
              <AddAnimal redirect={redirectFunc} />
            </PrivateRoute>
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
