import React, { Component } from 'react';

class NewPlantForm extends Component {
  render(){
    return (
      <div className="menu" >
        <form id="new-plant-form" className="dropdown-form">
          <h2>New Plant</h2>
          <br />
          <label>
            <h3>Species:</h3>
            <input type="text" name="species" value="" />
          </label>

          <label>
            <h3>Light Requirement:</h3>
            <input type="text" name="light_requirement" value="" />
          </label>

          <label>
            <h3>Humidity Requirement:</h3>
            <input type="text" name="humidity_requirement" value="" />
          </label>

          <label>
            <h3>Watering Frequency:</h3>
            <input type="text" name="water_frequency" value="" />
          </label>

          <label>
            <h3>Date Last Watered:</h3>
            <input type="date" name="last_watering" value="" />
          </label>

          <label>
            <h3>Date Last Fertilized:</h3>
            <input type="date" name="last_fertilization" value="" />
          </label>

          <label>
            <h3>Comments:</h3>
            <input type="text" name="comments" value="" />
          </label>

          <label>
            <input type="submit" value="Create" />
          </label>
        </form>
      </div>
    )
  }
}

export default NewPlantForm