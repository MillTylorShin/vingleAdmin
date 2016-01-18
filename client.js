import React            from 'react';
import Router           from 'react-router';
import BrowserHistory   from 'react-router';
import polyfill         from 'babel-polyfill';

import routes           from './app/routes/routes';

export default (() => {

 // Creating history object for the client router
 const history = new BrowserHistory();

 // Flushing application to DOM
 React.render(
   <Router history={history} children={routes} />,
   document.getElementById('vingle')
 );
})();
