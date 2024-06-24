// Importing the modules
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likePost = async (req, res) => {
    try {
        // Fetching the data from the request body
        const { post, user } = req.body;
        if (!post || !user) {
            return res.status(400).json({
                error: "Post and user fields are required"
            });
        }

        // Creating and saving the like object
        const like = new Like({ post, user });
        const savedLike = await like.save();

        // Updating the post collection
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        ).populate("likes").exec();

        res.status(200).json({ post: updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error while liking the post"
        });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
        // Fetching the data from the request body  
        const { post, like } = req.body;
        if (!post || !like) {
            return res.status(400).json({
                error: "Post ID and Like ID are required"
            });
        }

        // Finding and deleting the like
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
        if (!deletedLike) {
            return res.status(404).json({
                error: "Like not found"
            });
        }

        // Updating the post collection
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
        );

        res.status(200).json({ post: updatedPost });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while unliking the post"
        });
    }
};

// Dummy link for the like controller
exports.dummyLink = (req, res) => {
    res.send("This is the dummy link for the like controller");
};
