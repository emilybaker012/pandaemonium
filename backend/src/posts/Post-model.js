const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,

    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Post', PostSchema);
