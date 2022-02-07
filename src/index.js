const app = require('./app');

// database
require('./database');


app.listen(app.get('port'), () => {
  console.log(`the server is running on http://localhost:${app.get('port')} `);
})