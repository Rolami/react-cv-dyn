import React, { Component } from 'react';
import FallingLeaves from './FallingLeaves'; // Import the FallingLeaves component

class SecretWordDetector extends Component {
  // Define your secret word
  secretWord = "fall";

  // State to control the visibility of FallingLeaves
  state = {
    secretWordTyped: false,
  };

  // Handle key press event
  handleKeyPress = (event) => {
    const key = event.key.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Check if the secret word is typed
    if (key === this.secretWord) {
      this.setState({ secretWordTyped: true });
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <>
        {this.state.secretWordTyped && <FallingLeaves />}
      </>
    );
  }
}

export default SecretWordDetector;
