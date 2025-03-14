import express from 'express';
import { configDbSession } from './config/setupSession.js';
import './config/init-sequelize.js';
import './config/sequelize.js';
import mainRoute from './routes/mainRoute.js';
import cors from 'cors';

const app = express();
app.use(cors());
configDbSession(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRoute);

app.listen(8080, () => {
  console.log('Connected to the server');
});
