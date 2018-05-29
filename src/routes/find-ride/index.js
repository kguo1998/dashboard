import React from 'react';
import findRide from './find-ride';
import Header from '../../components/Header';

export default {
  path: '/',

  action() {
  	console.log('loading find-ride');
    return (
      <div>
      <Header />
      </div>
    );
  },

};
