const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const _ = require('lodash');
import hello from './neel';

console.log('Custom server started!!');
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below

const conf = require('./.next/required-server-files.json').config;
const app = new next({ dev, hostname, port, conf });

const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.

      const parsedUrl = parse(req.url, true);
      const answer = _.partition([1, 2, 3, 4], (n) => n % 2);
      console.log(answer);
      hello();
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

console.log('custom server => Done!!');
