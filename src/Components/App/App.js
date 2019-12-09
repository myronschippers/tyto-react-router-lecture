import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// PAGE COMPONENTS
import Home from '../pages/Home/Home';
import Plant from '../pages/Plant/Plant';
import Animal from '../pages/Animal/Animal';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <h1>Single Page Application (SPA)</h1>
                    </header>

                    <nav>
                        <ul className="navList">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/plant">Plants</Link></li>
                            <li><Link to="/animal">Animals</Link></li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/plant" component={Plant} />
                    <Route path="/animal" component={Animal} />
                </div>
            </Router>
        );
    }
}

export default App;
