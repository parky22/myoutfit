import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { me } from './reducer/user';
import { getAllClothings, getOutfit } from './reducer/clothing';

// Components
import { Main, UserHome, AddClothingForm, Closet, Landing } from './components';

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
  store.dispatch(getAllClothings());
}

const userHomeEnter = () => {
  store.dispatch(getOutfit());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing} />
        <Route path="/landing" component={Landing} />
        <Route onEnter={requireLogin}>
          <Route path="/home" component={UserHome} onEnter={userHomeEnter} />
          <Route path="/closet" component={Closet} onEnter={closetEnter} />
          <Route path="/addClothing" component={AddClothingForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
