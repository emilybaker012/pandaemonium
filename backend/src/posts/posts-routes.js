const express = require('express');

const router = express.Router();
const postsController = require('./posts-controller');
const verifyJWT = require('../auth/middleware/verifyJWT');

router.use(verifyJWT);

router.route('/')
  .get(postsController.getAllPosts) // This is risky if a lot of posts are created
  .post(postsController.creatNewPost); // Create
module.exports = router;
