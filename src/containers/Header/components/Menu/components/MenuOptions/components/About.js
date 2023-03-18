import React, { Component } from 'react'


class About extends Component {
  render(){
    return (
      <div>
        <u>ABOUT</u>
        <p className="aboutSection">GreenHouse is a simple application to help you keep track of your house plants. Using the buttons at the top left of the main page, you can add your houseplants to the left section of the screen and rooms or spaces to the right side. Once you've added at least one plant and one space, you can add the plant to the space by dragging it onto the space's name. Clicking a plant that is inside of a space will reveal how well-suited the plant is to the space's environment. Green attributes are optimal, red is a poor match, and yellow is in between. Make sure to come back whenever you tend to your plants to update the last time they were watered or fertilized.</p>
      </div>
    )
  }
}

export default About