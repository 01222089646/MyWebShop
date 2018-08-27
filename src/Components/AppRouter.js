import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './LoginForm';
import Account from './Account';
import Help from './Help';
import Products from './Products';
import Profile from './Profile';
import ProductDetail from './ProductDetail';


class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Header key={1} />
        <Router>
          <Switch>
            <Route key={1} exact path="/" component={Home}/>
            <Route key={2} path="/login" component={Login}/>
            <Route key={3} path="/account" component={Account}/>
            <Route key={4} path="/help" component={Help}/>
            <Route key={5} path="/product" component={Products}/>
            <Route key={6} path="/productdetail" component={ProductDetail}/>
            <Route key={7} path="/profile" component={Profile}/>
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;

