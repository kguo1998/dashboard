import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';


const title = 'Find Ride';

function findRide(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Find A Ride</PageHeader>
          <h3>This is find a Ride</h3>
        </div>
      </div>
    </div>
  );
}


findRide.contextTypes = { setTitle: PropTypes.func.isRequired };
export default findRide;
