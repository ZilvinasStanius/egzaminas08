import session from 'express-session';
import MySQLStore from 'express-mysql-session';
import mysql from 'mysql2/promise';

const MysqlStoreInstanse = MySQLStore(session);

const dbConfig = {
  host:  "172.17.51.91",
  user: 'egzaminas_08',
  password: 'egzaminas_08',
  database: 'egzaminas_08',
};

const pool = mysql.createPool(dbConfig);

const sessionStore = new MysqlStoreInstanse({}, pool);

export function configDbSession(app) {
  app.use(
    session({
      secret: 'banana',
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );
}

sessionStore
  .onReady()
  .then(() => {
    console.log('MySQLStore ready');
  })
  .catch((error) => {
    console.error(error);
  });