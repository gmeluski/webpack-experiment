import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

const Demo = React.createClass({
  render() {
    return <h3>Real!</h3>;
  }
});

const appRouter = () => {
  return (
    <Router>
      <Route path="/demo" component={Demo} />
    </Router>
  )
};

export default appRouter;
