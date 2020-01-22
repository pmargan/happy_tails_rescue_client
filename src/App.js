import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/">
          </Route>
          <Route path="/">
          </Route>
          <Route path="/">
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
