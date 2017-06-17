import React from 'react';
import { LandingImg } from './style/landingStyle';

const Landing = props => {
  return (
    <div>
      <ul>
        <li><LandingImg src="images/manrep1.gif" /></li>
        <li><LandingImg src="images/manrep2.gif" /></li>
        <li><LandingImg src="images/manrep4.gif" /></li>
        <li><LandingImg src="images/manrep5.gif" /></li>
        <li><LandingImg src="images/manrep6.gif" /></li>
        <li><LandingImg src="images/manrep7.gif" /></li>
      </ul>
    </div>
  )
};

export default Landing;
