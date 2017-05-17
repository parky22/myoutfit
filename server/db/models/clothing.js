const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('clothing', {
  clothingType: {
    type: Sequelize.ENUM,
    values: ['shirt', 'pants', 'other'],
    allowNull: false
  },

  color: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    set (inputColors) { // method notation in object literals like methods in class; retains normal 'this' context.
      const lowerCasedColors = inputColors.map(color => color.toLowerCase());
      this.setDataValue('color', lowerCasedColors);
    }
  },

  image: {
    type: Sequelize.STRING
  },

  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
}, {
  classMethods: {
    getByColor (color) {
      return this.findAll({ where: { color } })
    },

    getByTag (tag) {
      return this.findAll({
        where: {
          tags: {
            $contains: tag
          }
        }
      });
    }
  }
});
