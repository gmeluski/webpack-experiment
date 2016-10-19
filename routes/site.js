import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Demo from '../components/Demo';
import Staples from '../components/Staples';

/*
System.import('../components/Demo').then(function(module){
    console.log(module);
});
*/

const appRouter = () => {
  return (
    <Router>
      <Route
        path="/"
        getComponent={(nextState, cb)=> {
          cb(null, Demo);
        }}
      />
      <Route
        path="vince"
        getComponent={(nextState, cb) => {
          System.import('../components/Vince')
            .then(loadRoute(cb))
            .catch((errorLoading));
          }}
      />
      <Route path="staples" component={Staples} />
    </Router>
  )
};

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

export default appRouter;
/*
export default {
  childRoutes: [
    {
      path: '/demo',
      getComponent(location, cb) {
        System
          .import('../components/Demo')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};
*/
