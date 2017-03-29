import React, { Component } from 'react'
import Player from './Player.jsx'

class CurrentPlayers extends Component {
  
  render() {

    let currentPlayers = (this.props.players).map((player, i) => {
      return <Player player={player} key={i}/>
    })

    return (
      <div style={styles.container} className="currentPlayers">
        <input type="text" value={this.props.value} onChange={this.props.change}/>
        <button onClick={() => {this.props.newUser(this.props.value)}}>Create New User</button>
        {currentPlayers}
      </div>
    );
  }
};

const styles = {
  container: {
    color: 'blue',
    width: '200px',
    height: '800px',
    backgroundColor: 'green',
    float: 'left'
  }
}

export default CurrentPlayers;