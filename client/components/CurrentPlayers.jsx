import React, { Component } from 'react'
import Player from './Player.jsx'

class CurrentPlayers extends Component {
  
  render() {

    let currentPlayers = (this.props.players).map((player, i) => {
      return <Player player={player.username} score={player.score} key={i}/>
    })

    return (
      <div style={styles.container} className="currentPlayers">
        <div className='newUserBox'>
          <input className='nameInput' type="text" placeholder='username...' value={this.props.value} onChange={this.props.change}/>
          <button className='newUserButton' onClick={() => {this.props.newUser(this.props.value)}}>Create User and Join Game</button>
        </div>

        <div className='playerBox'>
          {currentPlayers}
        </div>
      </div>
    );
  }
};

const styles = {
  container: {
    position: 'relative',
    color: 'blue',
    width: '200px',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    float: 'left',
    padding: '10px'
  }
}

export default CurrentPlayers;