import React, { Component } from 'react';

import Team from './team';

import reptile1 from './reptile1.jpg';
import reptile2 from './reptile2.jpg';
import reptile3 from './reptile3.jpg';
import reptile4 from './reptile4.jpg';
import reptile5 from './reptile5.jpg';

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            teamMemberImage: reptile1,
            reptiles: [reptile1, reptile2, reptile3, reptile4, reptile5]
        }
        this.updateTeamMemberImage = this.updateTeamMemberImage.bind(this);
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    updateTeamMemberImage(e){

        const newImage = this.getRandomInt(0, 4);
        
        this.setState({
            teamMemberImage: this.state.reptiles[newImage]
        });
    }
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={this.state.teamMemberImage} className="app-logo" alt="logo" />
                    <h1>CashFlows</h1>
                </header>
                <Team 
                    win={true}
                    title={'The Dev Team'}
                    updateImage={this.updateTeamMemberImage}
                    members={['Joe Burton', 'Mark Ashton', 'Matthew Johnson', 'Andrew Bright', 'Greg Boyles', 'Jack Peacock', 'Jarad Yadallee', 'Ricky Dutton', 'Sam O\'Shea', 'Steven Hoel']} 
                />
            </div>
        );
    }
}

export default App;
