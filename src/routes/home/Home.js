

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';


const data = [
      { name: 'Week 1', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Week 2', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Week 3', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Week 4', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Week 5', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Week 6', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Week 7', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Your PickUp Dashboard</PageHeader>
        </div>
      </div>

      {/*<div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-comments fa-5x"
            count="26"
            headerText="New Comments!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tasks fa-5x"
            count="12"
            headerText="New Tasks!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-shopping-cart fa-5x"
            count="124"
            headerText="New Orders!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-support fa-5x"
            count="13"
            headerText="Support Tickets!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
      </div>*/}

      <div className="row">
        <div className="col-lg-8">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Your Ride Earnings
              <div className="pull-right">
          
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" />Total Distance Dirven
              <div className="pull-right">
                
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="1" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
          
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Alerts About PickUp
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> Receive Automated emails
                <span className="pull-right text-muted small"><em>xxxx@gamil.com</em></span>
              </ListGroupItem>
          
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-twitter fa-fw" /> Follow Us On Social Media
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
          
          
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-upload fa-fw" /> Information About Site       Maintenence
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
          
          
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-money fa-fw" /> Payment Information
                <span className="pull-right text-muted small"><em>review updates</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>More Alerts</Button>
          </Panel>

         
        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
