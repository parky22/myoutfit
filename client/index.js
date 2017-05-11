import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome } from './components';
import AddClothingForm from './components/AddClothingForm';
import Closet from './components/Closet';
import { me } from './reducer/user';

const dummyPants = {
  id: 1,
  clothingType: 'pants',
  color: ['green', 'multi'],
  image: 'http://cdn.shopify.com/s/files/1/0286/5680/products/lunapants.png?v=1453829472',
  tags: ['cute', 'floral', 'spring', 'casual']
}

const dummyShirt = {
  id: 2,
  clothingType: 'shirt',
  color: ['purple'],
  image: 'http://images.shirts.com/products/16493/14-14-43785/batman-neon-purple-t-shirt-back.jpg',
  tags: ['casual', 'light']
};

const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id) replace('/login');
      next();
    })
    .catch(err => console.log(err));

const closetEnter = props => {
  store.dispatch()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="addClothing" component={AddClothingForm} />
        <Route path="closet" component={Closet} onEnter={closetEnter} />
        <Route onEnter={requireLogin}>
          <Route path="home" component={UserHome} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
