const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const store = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

if (process.env.NODE_ENV === 'development') require('../.myoutfit.env.js');

passport.serializeUser((user, done) =>
  done(null, user.id));

passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done));


const runApp = () => {
  app
    .use(morgan('dev'))
    .use(express.static(path.join(__dirname, '..', 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store,
      resave: false,
      saveUninitialized: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use('/auth', require('./auth'))
    .use('/api', require('./api'))
    .use((req, res, next) =>
      path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next())
    .use('*', (req, res, next) =>
      res.sendFile(path.join(__dirname, '..', 'public/index.html')))
    .use((err, req, res, next) =>
      res.status(err.status || 500).send(err.message || 'Internal server error.'))
}

// if 'npm start' is being run, server will listen; otherwise test is running.
if (require.main === module) {
  store.sync()
    .then(() => db.sync()
      .then(() => {
        runApp();
        app.listen(PORT, () =>
          console.log(`Mixing it up on port ${PORT}`))
      })
    );
} else {
  runApp();
}
