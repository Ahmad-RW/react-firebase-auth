import React, { Component } from 'react';
import fire from '../config/fbConfig';


class Home extends Component {
    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>HI</h1>
                <button className="btn pink lighten-1 z=depth-0 " onClick={this.logout}>Logout</button>
                <h1>Dont worry about me</h1>
                <h1>Dont worry about me</h1>
            </div>
        )
    }
}

export default Home