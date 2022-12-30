require('dotenv').config();

const axios = require('axios');
const bodyParser = require('body-parser');
const compression = require('compression');
const dev = process.env.NODE_ENV !== 'production';
const express = require('express');
const next = require('next');
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // ===> Farm
    //
    server.get('/farm/rice', async (req, res) => {
      console.log('GET /farm/rice');

      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

      // sleep request for 3 seconds to see a longer loading screen example
      await new Promise(res => setTimeout(res, 3000));

      res.json(data);
    });

    server.post('/farm/rice', async (req, res) => {
      console.log('POST /farm/rice ', req.body);

      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        req.body,
      );

      res.json(data);
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.use((err, req, res) => {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err,
      });
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on Local Host: ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
