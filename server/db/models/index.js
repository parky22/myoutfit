const User = require('./user');
const Clothing = require('./clothing');

Clothing.belongsTo(User);
User.hasMany(Clothing);
