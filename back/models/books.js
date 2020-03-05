'use strict';
module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  return Books;
};