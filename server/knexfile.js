/**
 * KNEX CONFIG FILE
 */
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/league-of-stats',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
