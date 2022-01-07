const express = require('express');
const mongodb= require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) =>{
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//Add Posts
router.post('/', async (req,res) =>{
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})


//Delete Posts
router.delete('/:id', async (req, res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qh45w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true });

    return client.db(`${process.env.MONGO_DB}`).collection('posts');

}


module.exports = router;