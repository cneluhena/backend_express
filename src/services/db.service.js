const mysql = require("mysql");
const dbConfig = require("../configs/db.config");

const pool = mysql.createPool(dbConfig);

const query = async (sql) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query(sql, (error, results, fields) => {
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      return results;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
};

const escapedQuery = async (sql, values, timeout = 40000) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query(
      {
        sql: sql,
        timeout: timeout,
        values: values,
      },
      (error, results, fields) => {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        return results;

        // Don't use the connection here, it has been returned to the pool.
      }
    );
  });
};

module.exports = { query, escapedQuery };
