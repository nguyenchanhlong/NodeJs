
// const http = require('http');


// //Create an HTTP server
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('Hello world');
//         res.end();
//     }

//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify('Nguyen chanh long dep trai'));
//         res.end();
//     }
// })

// server.listen(3000)

// console.log('listening on port 3000...')


const http = require('http');

// create an http server
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Nguyen chanh long');
        res.end();
    }
    if(req.url === '/chanh'){
        res.write(JSON.stringify('Long dep trai'));
        res.end();
    }
})

server.listen(2000)
console.log('connection')