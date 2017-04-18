const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('clothe', {
  clothingType: {
    type: Sequelize.ENUM,
    values: ['shirt', 'pants', 'other'],
    allowNull: false
  },

  color: {
    type: Sequelize.STRING,
    allowNull: false,
    set: (colorInput) => {
      this.setDataValue('color', colorInput.toLowerCase());
    }
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
      })
    }
  }
});