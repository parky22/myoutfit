const request = require('supertest');
const {expect} = require('chai');
const db = require('../db');
const Clothing = db.model('clothing');
const User = db.model('user');
const app = require('../index');

describe('/api/clothing', () => {
  const shirt = {
    clothingType: 'shirt',
    color: ['purple'],
    image: 'http://images.shirts.com/products/16493/14-14-43785/batman-neon-purple-t-shirt-back.jpg',
    tags: ['casual', 'light']
  }

  const pants = {
    clothingType: 'pants',
    color: ['blue'],
    image: 'https://cloud.melijoe.com/p/aae93851_z_guess_25953_A.jpg',
    tags: ['casual', 'jeans']
  }

  const sweater = {
    clothingType: 'sweater',
    color: ['red', 'green', 'gold'],
    image: 'http://www.uglychristmassweaterforsale.com/384480-211-thickbox/ugly-christmas-sweater-by-fashion-bug.jpg',
    tags: ['christmas', 'ugly', 'party']
  }

  before(
    () => {
      return Promise.all([
        Clothing.create(shirt),
        Clothing.create(pants),
        Clothing.create(sweater)
      ])
    }
  )

  it('GET all clothings', () => {
    require(app)
      .get('/api/clothing')
      .expect(200)
      .then(res => expect(res.body.length).to.equal(3))
  });

});
