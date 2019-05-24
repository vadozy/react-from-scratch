const express = require('express');

const app = express();
const port = 3000;

app.get('*', (req, res) => {
  res.end('Hello Express');
});

/**
 * Simple logger function.
 */
function log(message) {
  process.stdout.write(`${message}\n`);
}

app.listen(port, () => log(`Server listening on port ${port}!`));
