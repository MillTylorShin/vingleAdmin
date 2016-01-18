import React           from 'react';
import { Route }       from 'react-router';
import Application     from '../components/application';
import IndexPage       from '../components/indexPage';

export default (
 <Route name="application" component={Application}>
   <Route name="index" path="/" component={IndexPage} />
 </Route>
);
