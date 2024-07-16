// const express = require('express');
// const cors = require('cors');
// const pino = require('pino-http')();

// const setupServer = () => {
//   const app = express();
//   app.use(cors());
//   app.use(pino);

//   app.use((req, res, next) => {
//     res.status(404).json({
//       message: 'Not found',
//     });
//   });

//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// module.exports = setupServer;

// const express = require('express');
// const cors = require('cors');
// const pino = require('express-pino-logger')();
// const contactsRouter = require('./routes/contacts');
// require('dotenv').config();

// const setupServer = () => {
//   const app = express();

//   app.use(cors());
//   app.use(pino);

//   app.use('/api', contactsRouter);

//   app.use((req, res, next) => {
//     res.status(404).json({ message: 'Not found' });
//   });

//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// module.exports = setupServer;

const express = require('express');
const cors = require('cors');
const pino = require('express-pino-logger')();
const contactsRouter = require('./routes/contacts');
require('dotenv').config();

const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(pino);

  app.use('/api', contactsRouter);

  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

module.exports = setupServer;