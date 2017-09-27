import React from 'react';
import Link from 'gatsby-link';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';

import CircleIcon from './circleIcon';

import email from '../assets/contact-icons/email-icon.png';
import phone from '../assets/contact-icons/phone-icon.png';
import social from '../assets/contact-icons/social-icon.png';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

const ContactShelf = () => 
  <section className="diagonal anticlockwise" style={styles.section}>
    <h2 style={Object.assign({}, sharedStyles.sectionHeading, {color: "white"})}>Have A Chat?</h2>
    <div className="container">
      <div className="row text-center">
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={email} circleColour="#7FB9FF" textColor="white" description="steph@etcetera.design" /></div>
        <div className="col-xs-6 col-sm-4"><CircleIcon iconURL={phone} circleColour="#7FB9FF" textColor="white" description="07875261339" /></div>
        <div className="clearfix visible-xs-block"></div>
        <div className="col-xs-6 col-sm-4 col-centered"><CircleIcon iconURL={social} circleColour="#7FB9FF" textColor="white" description="@_etceteradesign" /></div>
        <div className="clearfix visible-sm-block visible-md-block"></div>
      </div>
    </div>

    <DottedCircle style={{width: "30vh", height: "30vh", position: "absolute", top: "-15vh", left: "-15vh"}} /> 
    <Triangle style={{position: "absolute", bottom: "20vh", right: "-8vh", zIndex: -1}} width="18" height="22" colour="#fdc523" rotate="-45" />


  </section>

var styles = {};

styles.section = {
  background: colours.blue,
  paddingBottom: "10%",
  position: "relative"
}

export default ContactShelf;