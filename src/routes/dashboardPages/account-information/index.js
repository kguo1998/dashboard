import React from 'react';
import Blank from './blank';

export default {
  path: '/blank',

  action() {
  	console.log('loading account-information')
    return <Blank />;
  },

};
