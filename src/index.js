import express from 'express';
import dotenv from 'dotenv';
import initMongoConnection from './db/initMongoConnection.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT 

app.use(express.json());

import contactsRouter from './routes/contacts.js';
app.use('/api', contactsRouter);

initMongoConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Failed to initialize MongoDB connection:', error.message);
});