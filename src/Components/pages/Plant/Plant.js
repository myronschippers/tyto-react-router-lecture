import React, { Component } from 'react';
import AnimalsButton from '../../AnimalsButton/AnimalsButton';

class Plant extends Component {
    render() {
        return (
            <div>
                <h2>PLANTS</h2>
                <p>What do we have here...? Ooooooo, some glorious plants.</p>
                <AnimalsButton />
            </div>
        );
    }
}

export default Plant;
