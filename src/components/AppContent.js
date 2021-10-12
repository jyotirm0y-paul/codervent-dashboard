import React, {Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '../routes.js'

const AppContent = () => {
  return (
    <Suspense>
      <Switch>
        { routes.map((route, idx) => {
          return(
            route.component && <Route key={idx} path={route.path} exact={route.exact} render ={({props}) => ( <route.component name={route.name} title={route.title} {...props}/>)} />)})}
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Suspense>
  );
};

export default AppContent;