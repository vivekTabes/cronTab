import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


var expressStaticGzip = require('express-static-gzip');
var app = express();
 
app.use('/', expressStaticGzip('public', {
    enableBrotli: true,
    customCompressions: [{
        encodingName: 'brotli',
        fileExtension: 'br'
    }],
    orderPreference: ['gz']
}));

//const app = express();
app.use(express.static('public'));

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  // res.set('Content-Type', 'text/javascript');
  next();
});




app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
