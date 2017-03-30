import React, { Component } from 'react'

class Player extends Component {
  render() {
    // maybe add link for fb at the a tag
    return (
      <div style={styles.userStyle} className="player">
        <div style={styles.user}>{this.props.player}</div>
        <div style={styles.user}>{this.props.score}</div>
      </div>
    );
  }
};

const styles = {
  userStyle: {
    width: '100%',
    height: '20px',
    backgroundColor: 'rgb(112, 216, 255, 0.7)',
  },
  user: {
    width: '50%',
    display: 'inline-block'
  }
}

export default Player;