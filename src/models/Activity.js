const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allownull: false,
    },
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allownull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allownull: true,
      validate: {
        min: 1,
        max: 24,
      },
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allownull: false
    }
  });
};
