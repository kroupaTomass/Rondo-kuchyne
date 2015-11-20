import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.js';
import Home from './pages/home.js';
import NotFound from './pages/notFound.js';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="home" handler={ Home } />
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;
