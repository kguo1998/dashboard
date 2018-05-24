import React from 'react';
import accountInformation from './account-information';

export default {
  path: '/account',

  action() {
  	console.log('loading account-information');
    return <accountInformation />;
  },

};
