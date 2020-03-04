const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('success');
});

app.use(router);

app.listen(3000, err => {
  if (err) {
    process.exit(1);
    return;
  }
  console.log(`
    ################################################
    🛡️  Server listening on port: 3000 🛡️ 
    ################################################
  `);
});