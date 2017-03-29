import React, { Component } from 'react'

class Player extends Component {
  render() {
    return (
      <div className="player">{this.props.player}</div>
    );
  }
};

const styles = {
  userStyle: {
    width: '10px',
    height: '10px'
  }
}

export default Player;