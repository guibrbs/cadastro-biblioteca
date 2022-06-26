const express = require('express');
const app = express();
const db = require('./index');
const postModel = require('./postModel');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

app.post('/', async(req, res) => {
    const {nome, autor, data} = req.body;

    try{
        const newPost = await postModel.create({nome, autor, data});
        res.json(newPost);
    }catch (error){
        res.status(500).send(error);
    }
})

app.get('/', async (req, res) => {
    try{
        const posts = await postModel.find();
        res.json(posts);
    }catch (error){
        res.status(500).send(error);
    }
})

app.put('/:id', async(req, res) => {
    const {id} = req.params;
    const {nome, autor, data} = req.body;
    try{
        const post = await postModel.findByIdAndUpdate(id, {nome, autor, data});
        res.json(post)
    }catch (error){
        res.status(500).send(error);
    }
})

app.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try{
        const post = await postModel.findById(id);
        post.remove();
        res.json('Deleted');
    }catch (error){
        res.status(500).send(error);
    }
})

app.listen(3001, () => {
    console.log('listening to 3001');
})