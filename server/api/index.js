const router = require('express').Router();
module.exports = router;

// router.use((req, res, next) => {
//   console.log('OH HELLO')
//   next();
// });

router.use('/clothing', require('./clothing'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});
