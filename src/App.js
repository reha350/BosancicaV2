import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Events from './Events';
import Home from './Home';
import datenschutz from './datenschutz';
import nasinastupi from './nasinastupi';
import roditelji from './roditelji';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./FontAwesomeIcons";



function App() {
  return (
  <Router>
      <div className="App">
      <Nav />
        
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Events} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/nasinastupi" component={nasinastupi} />
          <Route path="/roditelji" component={roditelji} />
          <Route path="/datenschutz" component={datenschutz} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
