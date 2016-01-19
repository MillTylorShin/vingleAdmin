// State required modules
import express from 'express';

// Initialize Expreee server
const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Vingle Admin(?) [Express + React in Redux] Structure!</title>
    </head>
    <body>
      <div id="vingle"></div>
      <script type="application/javascript" src="/assets/bundle.js"></script>
    </body>
  </html>
  `;

  res.end(HTML);
});

// Actually Express listening from below port
app.listen(PORT, function() {
  console.info(`==> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
});

export default app;
