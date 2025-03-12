import sequelize from './sequelize.js';
import User from "../models/UserModel.js"
import PostModel from '../models/PostModel.js';


PostModel.belongsTo(User, {
    foreignKey: "userId",
  });


  User.hasMany(PostModel, {
    foreignKey: "postId",
  });


await sequelize.sync();


