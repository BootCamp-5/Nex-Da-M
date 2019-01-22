const mysql = require('mysql2/promise');
/* Step 1, create DB Pool */
const pool = mysql.createPool({
 	host: 'localhost',
 	user: 'root',
 	password: 'dlrudrms',
 	database: 'NDM'
});

module.exports = pool;