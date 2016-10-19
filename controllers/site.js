import React from 'react';
import { match, RouterContext, createRoutes } from 'react-router';
import {renderToString} from 'react-dom/server';
import appRouter from '../routes/site';
import template from '../template';

const routes = createRoutes(appRouter());

export default function site(req, res, next) {
   match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.status(200).send(template({body: content}));
    } else {
      res.status(404).send('Not Found');
    }
  });
}
