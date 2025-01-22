import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '/components/Menu';
import Home from '/components/Home';
import About from '/components/About';
import Gallery from '/components/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
