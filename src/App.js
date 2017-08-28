import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './HomeComponent';
import CombinedForm from './combined/CombinedForm';
import SeparatedForm from './separated/SeparatedForm';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <nav>
              <ul className="container">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/combined">Combined Form</Link></li>
                <li><Link to="/separated">Separated Form</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </nav>

            <div className="container">
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/combined" component={CombinedForm} />
              <Route exact path="/separated" component={SeparatedForm} />
              <Route exact path="/gallery" component={Gallery} />
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
