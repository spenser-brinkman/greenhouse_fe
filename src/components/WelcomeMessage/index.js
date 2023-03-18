import React, { Component } from 'react';

import './styles.scss'

class WelcomeMessage extends Component {
  dismissMessage() {
    this.props.onDismiss();
  }

  render() {
    return (
      <div className="welcome-message">
        <h1>
          Welcome to Green<strong>House</strong>!
        </h1>
        <p>
          Thanks for taking the time to check out my projects! Please note that this is a rudimentary application that I created early on in my web development journey. While I have learned a lot since building this app, it is not a fully polished product and contains known bugs. I share this project purely as a demonstration of fundamental competency in React.js, rather than as an example of mastery. Thank you for visiting!
        </p>
        <button class="dismiss" onClick={this.dismissMessage.bind(this)}>Dismiss</button>
      </div>
    );
  }
}

export default WelcomeMessage;