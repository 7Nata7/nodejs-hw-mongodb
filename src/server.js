// import express from 'express';
// import cors from 'cors';
// import pino from 'pino';
// import dotenv from 'dotenv';
// import contactsRouter from './routes/contacts.js';
// import initMongoConnection from './db/initMongoConnection.js';

// dotenv.config({ path: '.env.example' });

// const logger = pino();

// const setupServer = async () => {
//   const app = express();

//   app.use(cors());

//   app.use(express.json());

//   app.use((req, res, next) => {
//     logger.info(`${req.method} ${req.url}`);
//     next();
//   });

//   app.use('/api', contactsRouter);

//   app.use((req, res) => {
//     res.status(404).json({
//       message: 'Not found',
//     });
//   });

//   const PORT = process.env.PORT || 3000;

//   await initMongoConnection();

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// export default setupServer;

import express from 'express';
import cors from 'cors';
import pino from 'pino';
import dotenv from 'dotenv';
import contactsRouter from './routes/contacts.js';
import initMongoConnection from './db/initMongoConnection.js';

dotenv.config({ path: '.env.example' });

const logger = pino();

const setupServer = async () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });

  app.use('/contacts', contactsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  const PORT = process.env.PORT || 3000;

  await initMongoConnection();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;