import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '09a022f16b24487fbddf9a140ac7028a'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (Event) => {
    console.log(Event.target.value)
  } 

  onButtonSubmit = () => {
    app.models.predict("09a022f16b24487fbddf9a140ac7028a", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {

      },
      function(err) {

      }
    );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
  
      </div>
    );
  }
}


export default App;
