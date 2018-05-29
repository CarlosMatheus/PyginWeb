import React, { Component } from 'react';
import './SimpleButton.css';
import axios from 'axios';

class SimpleButton extends Component {

  render() {
    return (
      <button onClick={this.onClick}>Try it out! </button>
    );
  }

  onClick() {
    axios.get('editor/')
    .then(res => {
            console.log(res.json())
    }).then(response => {
        console.log(JSON.stringify(response));
    })
  }

}

export default SimpleButton;
