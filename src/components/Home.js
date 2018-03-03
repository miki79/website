import React, { Component } from 'react';
import githubLogo from './github.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="titleHome">
          miki<span className="yellow">.</span>me<span className="yellow">
            .
          </span>uk
        </h1>
        <a href="https://github.com/miki79">
          <img src={githubLogo} alt="Github" />github.com/<span className="yellow">
            miki79
          </span>
        </a>
      </div>
    );
  }
}

export default Home;
