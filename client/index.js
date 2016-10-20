import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, createRoutes} from 'react-router';
import appRouter from '../routes/site';

const routes = createRoutes(appRouter());

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('root')
)
