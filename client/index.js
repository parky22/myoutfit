import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { me } from './reducer/user';
import { getAllClothings } from './reducer/clothing';

// Components
import { Main, Login, Signup, UserHome } from './components';
import AddClothingForm from './components/AddClothingForm';
import Closet from './components/Closet';

const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id) replace('/login');
      next();
    })
    .catch(err => console.log(err));

const closetEnter = () => {
  store.dispatch(getAllClothings);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route onEnter={requireLogin}>
          <Route path="/home" component={UserHome} />
          <Route path="/closet" component={Closet} onEnter={closetEnter} />
          <Route path="/addClothing" component={AddClothingForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
