import express from 'express';
import http from 'http';

const appExpress = express();
const server = http.createServer(appExpress);

appExpress.use('/', (_, res) => {
  res.send('ok\n');
});

server.listen(process.env.PORT || 8080);
