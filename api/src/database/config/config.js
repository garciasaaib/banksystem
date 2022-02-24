require('dotenv/config')
const { DB_PORT, DB_HOST, DB_NAME, DB_PASS, DB_USER } = process.env

module.exports = {
  "development": {
    "username": DB_USER || "postgres",
    "password": DB_PASS || "admin",
    "database": DB_NAME || "bank",
    "dialect": "postgres",
    "host": DB_HOST || "127.0.0.1",
    "port": DB_PORT || 5432
  },
  "test": {
    "username": "postgres",
    "password": "admin",
    "database": "bank",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "admin",
    "database": "bank",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
