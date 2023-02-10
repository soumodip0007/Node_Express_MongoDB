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
  const tasks = [
        { title: 'learn html', body: 'task', assignedBy: 'faculty - Jhon', id: '1' },
        { title: 'learn css', body: 'task', assignedBy: 'faculty - Kevin', id: '2' },
        { title: 'learn js', body: 'task', assignedBy: 'faculty - Joseph', id: '3' },
    ];
  res.render('index', {title: 'Home', tasks});
});

app.get('/about', (req, res) => {
    //send method instead of write and end method 
    //res.send('<p>about page</p>');
    res.render('about', {title: 'About'});
});

app.get('/tasks/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Not Found'});
});