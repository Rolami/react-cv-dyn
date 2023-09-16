import React, { Component } from 'react';
import './App.css';
import cvData from './cvData.json';
import PersonalInfo from './Components/CV/PersonalInfo';
import Education from './Components/CV/Education';
import Experience from './Components/CV/Experience';
import FallingLeaves from './Components/FallingLeaves';
import SecretWordDetector from './Components/SecretWordDetector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Dynamic CV</h1>

        {/* Render the FallingLeaves component */}
        <FallingLeaves />

        <article>
          <PersonalInfo data={cvData.personalInformation} />
        </article>
        <Education data={cvData.education} />
        <Experience data={cvData.experience} />

        {/* Render the SecretWordDetector component */}
        <SecretWordDetector />
      </div>
    );
  }
}


export default App;
