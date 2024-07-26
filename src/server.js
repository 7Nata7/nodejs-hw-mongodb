import express from 'express';
import initMongoConnection from './db/initMongoConnection.js';
import contactsRouter from './routes/contacts.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/contacts', contactsRouter);

app.use(notFoundHandler);

app.use(errorHandler);

const setupServer = async () => {
  await initMongoConnection();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;