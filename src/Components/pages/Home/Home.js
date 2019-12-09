import React, { Component } from 'react';
import AnimalsButton from '../../AnimalsButton/AnimalsButton';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HOME</h2>
                <p>Some page content to be shown on the home page of our application.</p>
                <AnimalsButton />
            </div>
        );
    }
}

export default Home;