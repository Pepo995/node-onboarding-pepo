import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/index';
import { connection } from './database/index';
import { errorLogger, errorResponder } from './middlewares/middlewares';

const app = express();
const port = process.env.PORT || 3001;

app.use('/', express.json(), router, errorLogger, errorResponder);

connection.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
