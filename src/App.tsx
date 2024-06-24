import * as React from "react"
import { Route, Switch } from "react-router-dom"

import { AppGlobalStyles } from "./App.styles"

import Home from "./Home"
import { Page as CalendarPage } from "./pages/CalendarPage"

const App = () => {
  return (
    <>
      <AppGlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:schoolShortName" component={CalendarPage} />
      </Switch>
    </>
  )
}

export default App
