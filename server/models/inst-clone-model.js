const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instaSchema = new Schema(
   {
      userName: {
         type: String,
         required: true,
      },
      postImageURL: {
         type: String,
         required: true,
      },
      caption: String,
      comments: [
         {
            username: String,
            comment: String,
         },
      ],
      isLiked: Boolean,
      likeCounter: Number,
   },
   { timestamps: true }
);

module.exports = mongoose.model("instagram", instaSchema);
