const { Pool } = require('pg');
const dotenv = require('dotenv').config();

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const NAME = process.env.DB_NAME;

DATABASE_URL = `postgres://${USER}:${PASS}@127.0.0.1:5432/${NAME}`;

const pool = new Pool({
  connectionString: DATABASE_URL
});

function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  query
};