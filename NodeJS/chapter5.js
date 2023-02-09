//Stream

//Read Stream
const fs = require('fs');
const { ReadStream } = require('tty');

// const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' });

// readStream.on('data', (user) => {
//     console.log('------NEW USER------')
//     console.log(user.toString());
// });

//Write Stream
const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/doc4.txt', { encoding: 'utf8' });

// readStream.on('data', (user) => {
//     console.log('------NEW USER------')
//     console.log(user.toString());
//     writeStream.write('\nNEW USER\n');
//     writeStream.write(user);
// });

//piping
readStream.pipeline(writeStream);
