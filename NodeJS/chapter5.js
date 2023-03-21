//Stream

//Read Stream
const fs = require('fs');
// const { ReadStream } = require('tty');

// const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' });

// readStream.on('data', (user) => {
//     console.log('------NEW USER------')
//     console.log(user.toString());
// });

//Write Stream
const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/doc4.txt', { encoding: 'utf8' });

readStream.on('data', (user) => {
    console.log('------NEW USER------')
    console.log(user.toString());
    writeStream.write('\n A wiki is an online hypertext publication collaboratively edited and managed by its own audience, using a web browser. A typical wiki contains multiple pages for the subjects or scope of the project, and could be either open to the public or limited to use within an organization for maintaining its internal knowledge base.\n');
    writeStream.write(user);
});

//piping
// readStream.pipeline(writeStream);
