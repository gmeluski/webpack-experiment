import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Vince from '../components/Vince';

const Demo = React.createClass({
  render() {
    return <h3>Real!</h3>;
  }
});

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
        component={Demo}
      />
      <Route
        path="vince"
        getComponent={(nextState, cb) => {
          cb(null, Vince)
        }}
      />
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
