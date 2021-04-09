module.exports = {
  mongoDb: {
    database: 'db_books',
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
  }
};
