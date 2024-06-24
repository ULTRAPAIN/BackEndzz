// Importing the models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business logic
exports.createComment = async (req, res) => {
    try {
        // Fetch data from the req body
        const { post, user, body } = req.body;

        // Check if the required fields are provided
        if (!post || !user || !body) {
            return res.status(400).json({
                error: "Post, user, and body fields are required"
            });
        }

        // Create the comment object
        const comment = new Comment({
            post,
            user,
            body,
        });

        // Saving the comment to the database
        const savedComment = await comment.save();

        // Find the post by Id and push the comment id in the comments array of the post
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
        .populate("comments") // Populate the comments array of the post
        .exec();

        // Check if the post was found and updated
        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found"
            });
        }

        res.json({
            post: updatedPost
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({
            error: "Error while creating the comment"
        });
    }
};
