module.exports = {
  development: {
    db: {
      username: "postgres",
      password: "",
      database: "postgres",

      host: 'localhost',
      dialect: 'postgres',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    }
  },
  production: {
    db: {
      username: "postgres",
      password: "",
      database: "postgres",

      host: 'localhost',
      dialect: 'postgres',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    }
  }


}