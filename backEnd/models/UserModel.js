import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';
import PostModel from './PostModel.js';

const User = sequelize.define('users', {
 
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.hasMany(PostModel, {
  foreignKey: "userId",
});

export default User;



