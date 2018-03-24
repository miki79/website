import React, { Component } from 'react';
import ReactGA from 'react-ga';
import githubLogo from './github.png';
import twitterLogo from './twitter.png';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="titleHome">
          <span class="yellow">"</span>We can be Heroes,<br /> just for one day<span class="yellow">
            "
          </span>
        </h1>
        <p class="subTitle">
          <span class="yellow">David Bowie</span>
        </p>
        <p>
          <ReactGA.OutboundLink
            eventLabel="github"
            to="https://github.com/miki79"
          >
            <img src={githubLogo} alt="Github" />github.com/<span className="yellow">
              miki79
            </span>
          </ReactGA.OutboundLink>
        </p>
        <p>
          <ReactGA.OutboundLink
            eventLabel="twitter"
            to="https://twitter.com/mikiuk"
          >
            <img src={twitterLogo} alt="Twitter" />twitter.com/<span className="yellow">
              mikiuk
            </span>
          </ReactGA.OutboundLink>
        </p>
      </div>
    );
  }
}

export default Home;
