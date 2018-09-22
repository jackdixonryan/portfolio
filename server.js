const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log('express listening on PORT: ' + PORT);
});
