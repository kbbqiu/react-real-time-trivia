import React, { Component } from 'react'

class Trivia extends Component {
  render() {
    return (
      <div style={styles.trivia} className="trivia">{this.props.question}</div>
    );
  }
};

const styles = {
  trivia: {
    color: 'Black',
    fontSize: '30px',
  }
}

export default Trivia;