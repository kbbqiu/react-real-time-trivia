import React, { Component } from 'react'

class Answers extends Component {
  render() {
    let list = []
    for (let i = 0; i < 4; i += 1) {
      list.push(<li key={i}><button style={styles.button} onClick={() => this.props.onClick(this.props.answers[i])}>{this.props.answers[i]}</button></li>)
    }

    return (
      <ul style={styles.list}>
        {list}
      </ul>
    );
  }
}

const styles = {
  list: {
    listStyleType: 'none'
  },
  button: {
    height:  '60px',
    width: '400px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #F9405C',
    marginBottom: '2px',
    marginRight: '25px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    transitionDuration: '0.4s',
  }
}

export default Answers;