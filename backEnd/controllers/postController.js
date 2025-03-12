import { where } from 'sequelize';
import PostModel from '../models/PostModel.js';

export async function getAllPosts(req, res) {
  const allPosts = await PostModel.findAll();

  if (!allPosts) {
    return res.status(404).json({ error: 'No posts found' });
  }

  res.status(200).json(allPosts);
}

export async function createPost(req, res) {
  const { title, description} = req.body;

  try {
    if (req.body === undefined) {
      return res.statu(400).json({ error: 'Please fill all fields' });
    }
    const newPost = await PostModel.create({ title, description, state:true });

    res.status(200).json(newPost);
  } catch (error) {
    console.error('Error creating post', error);
    res.status(500).json({ error: 'Server error' });
  }
}

export async function updatePost(req, res) {
  const { id } = req.params;

  try {

    // if(!req.session.user.admin){
    //   return res.status(400).json({error:"Only admin can update post"})
    // }
    console.log(req.session.user)

    if (!id) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await PostModel.update(req.body, { where: { id } });
    // await PostModel.update({ status: true });
    // await PostModel.save();


    const post = await PostModel.findOne({ where: { id } });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json('Post not found');
  }
  PostModel.destroy({ where: { id } });
  res.status(200).json('Post deleted');
}

export async function getPostById(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json('Post not found');
  }

  const foundPost = await PostModel.findOne({ where: { id } });
  res.status(200).json(foundPost);
}