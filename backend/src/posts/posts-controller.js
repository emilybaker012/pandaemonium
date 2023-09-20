const asyncHandler = require('express-async-handler');
const Post = require('./Post-model');
const User = require('../users/User-model');

// @desc Get all posts
// @route GET /posts
// @access Private
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate('createdBy', 'username').lean();
  if (!posts?.length) {
    return res.status(400).json({ message: 'No notes found' });
  }

  return res.json(posts);
});

// @desc Create new post
// @route POST /posts
// @access Private
const creatNewPost = asyncHandler(async (req, res) => {
  const { body, userId } = req.body;
  const user = await User.findById(userId).lean();
  if (!user) {
    return res.status(400).json({ message: 'Could not create post with the given user. Please check that the user is valid' });
  }

  const newPost = await Post.create({ body, createdBy: user._id });

  if (newPost) {
    return res.status(201).json({ message: 'New post created' });
  }

  return res.status(400).json({ message: 'Invalid post data recieved' });
});

module.exports = {
  getAllPosts,
  creatNewPost,
};
