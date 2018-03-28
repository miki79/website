import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  constructor() {
    super();
    this.state = { weather: [] };
  }

  componentWillMount() {
    fetch('https://g.api.miki.me.uk/weather')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ weather: data });
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  render() {
    console.info(this.state);
    return (
      <div className="weatherBox">
        {this.state.weather.map((item, index) => {
          return (
            <div key={index}>
              <p className="weather-description">
                {item.description} <img src={item.icon} alt={item.main} />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Weather;
