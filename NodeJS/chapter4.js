//file system

const fs = require('fs');

//reading files
// fs.readFile('./docs/doc1.txt', (err, data) => {
//    if(err){
//     console.log(error);
//    } else {
//     console.log(data.toString());
//    }
// });

// console.log('last line');



//writing files
// fs.writeFile('./docs/doc1.txt', 'hello, pekka', () => {
//    console.log('file was written');
// });

// fs.writeFile('./docs/doc2.txt', 'hello, pekka', () => {
//     console.log('file was written');
// });



//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }



//deleting files
if(fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}
