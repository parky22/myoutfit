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
    set: (colorInput) => {
      this.setDataValue('color', colorInput.toLowerCase());
    }
  },

  image: {
    type: Sequelize.STRING,
    allowNull: false
  },

  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
}, {
  classMethods: {
    getByColor: (color) => {
      return this.findAll({ where: { color } })
    },

    getByTag: (tag) => {
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
