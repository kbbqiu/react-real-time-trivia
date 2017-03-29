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
    height:  '30px',
    width: '200px'
  }
}

export default Answers;