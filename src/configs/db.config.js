const dbConfig = {
  connectionLimit: 10,
  host: "localhost",
  user: "dbms_user",
  password: "1234",
  database: "dbms_proj",
  connectTimeout: 60000,
  flags: "MULTI_STATEMENTS",
};

module.exports = { dbConfig };
