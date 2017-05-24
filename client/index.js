import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { me } from './reducer/user';
import { getAllClothings, selectedPiece } from './reducer/clothing';

// Components
import { Main, Login, Signup, UserHome, AddClothingForm, Closet, Clothing } from './components';

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

const clothingEnter = nextRouterState => {
  console.log("PROPS", props);
  const pieceId = nextRouterState.params.pieceId;
  store.dispatch(selectedPiece(pieceId));
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
          <Route path="/piece/:pieceId" component={Clothing} onEnter={clothingEnter} />
          <Route path="/addClothing" component={AddClothingForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
