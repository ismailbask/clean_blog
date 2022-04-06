const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

//Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('index')
});
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('about')
});
app.get('/add', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('add_post')
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
})