import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import NotFound from './components/NotFound';
ReactGA.initialize('UA-110184077-2');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.set({anonymizeIp:true});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
