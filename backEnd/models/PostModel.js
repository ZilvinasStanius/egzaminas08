import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';
import User from './UserModel.js';

const PostModel = sequelize.define('posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },

  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  answer: {
    type: DataTypes.TEXT('medium'),
    defaultValue: null,
  }

});


export default PostModel;