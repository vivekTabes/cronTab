import App from './App';
import HomePage from './pages/HomePage';
import AllExp from './pages/AllExp';
import  MostSearch  from './pages/MostSearch';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...HomePage,
        path: '/:reqParams',
        exact: true
      },
      {
        ...AllExp,
        path: '/all/exp',
          exact: true
      },
      {
        ...MostSearch,
        path: '/most/search'

      }
    ]
  }
];
