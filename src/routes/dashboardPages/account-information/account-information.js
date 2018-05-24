import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'accountInformation';

function displayaccountInformation(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>This is Account Information</PageHeader>
        </div>
      </div>
    </div>
  );
}


displayaccountInformation.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayaccountInformation;
