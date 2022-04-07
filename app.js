const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Posts');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', async (req, res) => {
    const posts = await Post.find({});
    res.render('index', {
        posts
    })
});
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('about')
});
app.get('/add', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('add_post')
});
app.post('/posts', async (req, res) => {
    // console.log(req.body);
    await Post.create(req.body);
    res.redirect('/');
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
})