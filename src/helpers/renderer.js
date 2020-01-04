import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
  <!doctype html>
  <html encoding="UTF-8" charset="UTF-8" dir="ltr" lang="en-US" language="English" prefix="og: http://ogp.me/ns#" itemtype="http://schema.org/WebPage">
  
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta data-rh="true" name="description"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script defer async>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
