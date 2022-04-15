//To create, delete and update posts
const router = require("express").Router();
const Post = require("../models/Post")
const newComment = require("../models/Comments")

//Create new post
router.post("/", async (req, res) => {
    const newPost = await new Post(req.body);

    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);

    } catch (err) {
        res.status(500).json(err)
    }
})

//Get Post 

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
        
        
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get All Posts

router.get("/", async (req, res) => {
    try {
        const allPost = await Post.find()
        res.status(200).json(allPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Post Comment
router.post("/:id/comments", async (req, res) => {
        console.log(req.body.text);
    try {
        const enteredComment = new newComment({
            text: req.body.text
        }) 
       enteredComment.save( (err, res) => {
            if (err) {
                res.status.json(err)
            } else {
                Post.findById(req.params.id, (err, post) => {
                    if(err) {
                        res.status.json(err)
                    } else {
                        post.comments.push(res)
                        post.save();
                    }
                })
            }
       })

    } catch (err) {
        res.status(500).json(err)
    }
})

//GEt Comment
router.get("/:id/comments", (req, res) => {
    console.log(req.params.id);
    Post.findById(req.params.id).populate("comments").exec((err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.status(200).json(result)
        }
    })
})

module.exports = router;