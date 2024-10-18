const express = require('express')

const feedControler = require('../controller/feed')

const router = express.Router()

router.get('/posts', feedControler.getPosts);

router.post('/post', feedControler.createPost);

module.exports = router;