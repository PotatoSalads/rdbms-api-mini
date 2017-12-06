// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/zoodb.db'
    },
    migration: {
      tableName: 'migrations',
    },
    useNullAsDefault: true,
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'zoodb',
      user:     'root',
      password: 'BeansBear21!'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
