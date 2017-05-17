const db = require('./index');

const dummyPants = {
  clothingType: 'pants',
  color: ['green', 'multi'],
  image: 'http://cdn.shopify.com/s/files/1/0286/5680/products/lunapants.png?v=1453829472',
  tags: ['cute', 'floral', 'spring', 'casual']
}

const dummyShirt = {
  clothingType: 'shirt',
  color: ['purple'],
  image: 'http://images.shirts.com/products/16493/14-14-43785/batman-neon-purple-t-shirt-back.jpg',
  tags: ['casual', 'light']
};

const dummyNoImage = {
  clothingType: 'other',
  color: ['pink'],
  image: 'http://img.sheinside.com/images/sheinside.com/201310/1381733774262442938.jpg',
  tags: ['casual', 'warm']
};

const seedClothes = () => db.Promise.map([
  dummyPants,
  dummyShirt,
  dummyNoImage
], clothing => db.model('clothing').create(clothing));

db.sync({force: true})
  .then(seedClothes)
  .then(clothings => console.log(`Seeded ${clothings.length} clothings!`))
  .catch(error => console.error(error))
  .finally(() => db.close());
