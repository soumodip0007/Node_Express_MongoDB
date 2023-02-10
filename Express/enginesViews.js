const express = require('express');

//express app

const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
  //send method instead of write and end method 
  //res.send('<p>home page</p>');
  res.render('index');
});

app.get('/about', (req, res) => {
    //send method instead of write and end method 
    //res.send('<p>about page</p>');
    res.render('about');
});

app.get('/tasks/create', (req, res) => {
    res.render('create');
})

//404 page
app.use((req, res) => {
    res.status(404).render('404')
});