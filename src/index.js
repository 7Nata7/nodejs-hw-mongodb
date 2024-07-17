// import express from 'express';
// import dotenv from 'dotenv';
// import initMongoConnection from './db/initMongoConnection.js'; 

// dotenv.config();

// const app = express();
// const port = process.env.PORT 

// app.use(express.json());

// import contactsRouter from './routes/contacts.js';
// app.use('/api', contactsRouter);

// initMongoConnection().then(() => {
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// }).catch((error) => {
//   console.error('Failed to initialize MongoDB connection:', error.message);
// });

import express from 'express';
import initMongoConnection from './db/initMongoConnection.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.example' });

const app = express();
const PORT = process.env.PORT || 3000;

initMongoConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});