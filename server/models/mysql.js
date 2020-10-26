/*
    The file for providing the connections and mySql functionality to the rest of the project

    INSERT INTO `Users` (`id`, `created_at`, `update_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES (NULL, NOW(), CURRENT_TIMESTAMP, 'Skyler', 'Young', '1995-05-07 00:00:00', NULL, '5'), (NULL, NOW(), CURRENT_TIMESTAMP, 'Donald', ' Trump', '2020-10-01 00:00:00', NULL, '6');

*/

const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10, // default 10
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, binding, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  
module.exports = { pool, query };