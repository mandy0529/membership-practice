import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../routers/Home';
import Detail from '../routers/Detail';
import Show from '../routers/Show';
import Search from '../routers/Search';
import Header from './Header';

function Router() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/show" exact={true} component={Show} />
        <Route path="/detail" exact={true} component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}
export default Router;
