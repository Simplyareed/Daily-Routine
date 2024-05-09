const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create DailyTask model and datatypes, including the user_id foreign key.
class DailyTask extends Model {}

DailyTask.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'DailyTask', // Model name is explicitly set to 'DailyTask'
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = DailyTask;