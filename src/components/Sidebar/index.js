import React, { Component } from 'react';
// import classNames from 'classnames';
import history from '../../core/history';
import { Glyphicon, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/findride'); }} >
                <Glyphicon style={{marginLeft: '2px', marginRight: '2px'}} glyph="search"/> &nbsp;Find A Ride
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/rewards'); }} >
                <Glyphicon style={{marginLeft: '2px', marginRight: '2px'}} glyph="star"/> &nbsp;Rewards
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/history'); }} >
                <Glyphicon style={{marginLeft: '2px', marginRight: '2px'}} glyph="list"/> &nbsp;Ride History
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/settings'); }} >
                <Glyphicon style={{marginLeft: '2px', marginRight: '2px'}} glyph="cog"/> &nbsp;Settings
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/account'); }} >
                <Glyphicon style={{marginLeft: '2px', marginRight: '2px'}} glyph="user"/> &nbsp;Account Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
