import path from 'path';
import Express from 'express';
import React from 'react';
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import { renderToString, renderToStaticMarkup, ReactDOMServer } from 'react-dom/server';
import Router   from 'react-router';
import routes   from './app/routes/routes';

const app = Express();
const port = 4000;

app.use(Express.static(path.join(__dirname, 'public')));
app.use(handleRender);

function handleRender(req, res) {
  // Creating location object for the server router
  let location = createLocation(req.url)
  const body = "Hello Express!";

  try {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vingle Admin(or Mobile)</title>
        </head>
        <body>
          <div id="vingle">${body} You are Now in the ${location.pathname}</div>
          <script src="/assets/bundle.js"></script>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(err.stack);
  }
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
