import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Team extends Component {
    basicStyling() {
        return {
            listStyle: 'none',
            margin: '0 auto',
            textAlign: 'left'
        };
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul className="members" style={this.basicStyling()}>
                    {this.props.members.map((member, i) => {
                        return (
                            <li key={i} onClick={this.props.updateImage}>{member}</li>
                         )
                    })}
                </ul>
            </div>
        );
    }
};

Team.propTypes = {
    updateImage: PropTypes.func,
    members: PropTypes.array,
    title: PropTypes.string
};

Team.defaultProps = {
    title: 'Team'
};

export default Team;