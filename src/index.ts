import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/index';
import { connection } from './database/index';

const app = express();
const port = process.env.PORT || 3001;

app.use('/', express.json(), router);

connection.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
