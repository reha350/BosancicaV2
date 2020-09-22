import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Events from './Events';
import Home from './Home';
import datenschutz from './datenschutz';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./FontAwesomeIcons";



function App() {
  return (
  <Router>
      <div className="App">
      <Nav />
        
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/datenschutz" component={datenschutz} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
