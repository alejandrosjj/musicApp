'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.BIGINT,
    img: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
    Product.order = Product.belongsToMany(models.Order, { through: 'OrderLines' });
  };
  return Product;
};