
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('egzaminas_08', 'egzaminas_08', 'egzaminas_08', {
  host: "172.17.51.91",
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('Connected to database');
} catch (error) {
  console.error('Unable to connect', error);
}

export default sequelize;