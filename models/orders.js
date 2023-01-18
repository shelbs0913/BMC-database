'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    items: DataTypes.ARRAY(DataTypes.JSON),
    name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    itemTotal: DataTypes.DECIMAL,
    taxTotal: DataTypes.DECIMAL,
    finalTotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};