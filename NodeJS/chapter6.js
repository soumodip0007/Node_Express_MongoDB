// Clients & Servers

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log(req.url, req.method);

//set header content type
res.setHeader('Content-type', 'text/html');

let path = './chapter6Views/';
switch(req.url) {
    case '/': 
      path += 'index.html';
      //status code
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      //status code
      res.statusCode = 200;
      break;
      case '/about-me':
      path += 'about.html';
      //status code
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      //status code
      res.statusCode = 404;
      break;
}

  //  res.write('<head><linl rel="stylesheet" href="#"></head>');
  //  res.write('<p>hello, developers</p>');
  //  res.write('<p>hello again, developers</p>');
  //  res.end();
 
// send a single html file
fs.readFile('./chapter6Views/index.html', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        // res.write(data);
        res.end(data);
    }
})   

fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // res.write(data);
        res.end(data);
    }
})  

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});