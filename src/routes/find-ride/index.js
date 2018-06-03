import React from 'react';
import findRide from './find-ride';
import 'find.css';


export default {
  path: '/',

  action() {
  	console.log('loading find-ride');
    return (
      <div>
          

        <findRide/>
      </div>
    );
  },

};
