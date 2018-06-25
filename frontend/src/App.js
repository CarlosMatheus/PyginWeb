import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
//import PonyNote from "./components/PonyNote";
import NotFound from "./components/NotFound";
import LandingPage from "./components/landing_page/src/index";
import Editor from "./components/editor/interface"

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/editor" component={Editor} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}


export default App;
