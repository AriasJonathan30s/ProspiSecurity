const http = require("http");
const api = require ('./src/app');
const port = process.env.SECUREPORT || 3002;
const server = http.createServer(api);

server.listen(port,()=> console.log(`server levantado en ${port}`));