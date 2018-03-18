import React, { Component } from 'react';
import ReactGA from 'react-ga';
import githubLogo from './github.png';
import twitterLogo from './twitter.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="titleHome">miki<span className="yellow">.</span>me<span className="yellow">.</span>uk</h1>
        <p>
          <ReactGA.OutboundLink eventLabel="github" to="https://github.com/miki79">
            <img src={githubLogo} alt="Github" />github.com/<span className="yellow">miki79</span>
          </ReactGA.OutboundLink>
        </p>
        <p>          
          <ReactGA.OutboundLink eventLabel="twitter" to="https://twitter.com/mikiuk">
            <img src={twitterLogo} alt="Twitter" />twitter.com/<span className="yellow">mikiuk</span>
          </ReactGA.OutboundLink>
        </p>
      </div>
    );
  }
}

export default Home;
