const router = require('express').Router();
const Clothings = require('../db').model('clothing');
module.exports = router;

router.get('/', (req, res, next) => {
  Clothings.findAll()
    .then(foundClothings => res.json(foundClothings))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Clothings.findOrCreate(req.body)
    .spread((createdClothing) => res.status(201).json(createdClothing))
    .catch(next);
});

router.put('/', (req, res, next) => {
  Clothings.update(req.body, {
      where: {
        id: req.body.id
      },
      returning: true
    })
    .then(updatedClothing => res.json(updatedClothing))
    .catch(next);

});

router.delete('/', (req, res, next) => {
  Clothings.destroy(req.body)
    .then(() => res.status(204).end())
    .catch(next);
});
