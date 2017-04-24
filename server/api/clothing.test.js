const request = require('supertest');
const { expect } = require('chai');
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
  };

  const pants = {
    clothingType: 'pants',
    color: ['blue'],
    image: 'https://cloud.melijoe.com/p/aae93851_z_guess_25953_A.jpg',
    tags: ['casual', 'jeans']
  };

  const sweater = {
    clothingType: 'other',
    color: ['red', 'green', 'gold'],
    image: 'http://www.uglychristmassweaterforsale.com/384480-211-thickbox/ugly-christmas-sweater-by-fashion-bug.jpg',
    tags: ['christmas', 'ugly', 'party']
  };

  const newShirt = {
    clothingType: 'shirt',
    color: ['orange'],
    image: 'http://www.mcssl.com/content/154960/AMAZON/SHIRTS/BNG-01_ORANGE_47.jpg',
    tags: ['casual', 'light', 'ugly']
  };


  const initialClothings = [shirt, pants, sweater];
  let shirtId, pantsId, sweaterId;

  beforeEach('Sync db, create 3 instances of clothing, set variables to ids',
    () => {
      return db.sync({ force: true })
        .then(() => {
          return Clothing.bulkCreate(initialClothings, { returning: true })
            .spread((createdShirt, createdPants, createdSweater) => {
              [shirtId, pantsId, sweaterId] = [createdShirt.id, createdPants.id, createdSweater.id];
            });
        }
        )
    });

  it('GET all clothings', () => {
    return request(app)
      .get('/api/clothing')
      .expect(200)
      .then(res => {
        expect(res.body.length).to.equal(3);
      });
  });

  it('POST a piece of clothing', () => {
    return request(app)
      .post('/api/clothing')
      .send(newShirt)
      .expect(201)
      .then(res => expect(res.body).to.equal(newShirt))
      .then(() => {
        Clothing.findAll()
          .then(clothes => expect(clothes.length).to.equal(4));
      });
  });

  //   it('UPDATE a piece of clothing', () => {
  //     return request(app)
  //     .put(`/api/clothing/${shirtId}`)
  //     .send({ tags: ['cool'] })
  //     .expect(200)
  //     .then(res => expect(res.body).to.equal())
  //   });


});
