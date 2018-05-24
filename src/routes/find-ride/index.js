import React from 'react';
import findRide from './find-ride';

export default {
  path: '/',

  action() {
  	console.log('loading find-ride');
    return <findRide />;
  },

};
