import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Single Page Application (SPA)</h1>
                </header>

                <div>
                    <h2>HOME</h2>
                    <p>Some page content to be shown on the home page of our application.</p>
                </div>

                <div>
                    <h2>PLANTS</h2>
                    <p>What do we have here...? Ooooooo, some glorious plants.</p>
                </div>

                <div>
                    <h2>ANIMALS</h2>
                    <p>YES!!! I love animals. What kind of adorable animals do we get to see?</p>
                </div>
            </div>
        );
    }
}

export default App;
