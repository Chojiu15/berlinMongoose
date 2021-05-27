const Post = require("../models/Post");

const express = require("express");
const postRouter = express.Router();
postRouter.use(express.urlencoded())

postRouter.get("/api/posts", (req, res) => {
  Post.find()
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
});

postRouter.post('/api/posts', (req, res) => {
    Post
    .create(req.body)
    .then(post => res.json(post))
    .catch((err) => res.json(err));
})

postRouter.put('/api/posts/:id', (req, res) => {
    Post
    .updateOne({_id : req.params.id}, {$set : {title :  req.body.title}})
    .then(post => res.json(post))
    .catch((err) => res.json(err));
})

postRouter.get('/api/posts/:id',(req, res) => {
    Post
    .findById(req.params.id)
    .then(post => res.json(post))
    .catch((err) => res.json(err));})

postRouter.delete('/api/posts/:id', (req, res) => {
    Post
    .deleteOne({ _id : req.params.id})
    .then(() => res.json('Document deleted'))
    .catch((err) => res.json(err))
})

module.exports = postRouter;
