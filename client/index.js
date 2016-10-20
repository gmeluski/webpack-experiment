import React from 'react';
import {render} from 'react-dom';
import {match, Router, browserHistory, createRoutes} from 'react-router';
import appRouter from '../routes/site';

const routes = createRoutes(appRouter());

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} />,
    document.getElementById('root')
  )
});

