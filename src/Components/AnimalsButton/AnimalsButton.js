import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AnimalsButton extends Component {
    clickGoToAnimals = (event) => {
        alert('You are heading to the Animals page!!!!');
        // CHANGE PAGES???
        this.props.history.push('/animal');
    }

    render() {
        return (
            <button onClick={this.clickGoToAnimals}>See Animals</button>
        );
    }
}

export default withRouter(AnimalsButton);
