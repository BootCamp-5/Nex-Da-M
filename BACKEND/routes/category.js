var express = require('express');
var router = express.Router();

const pool = require("../configs/mysql");

/* GET home page. */
router.get('/', async (req, res, next) => {

        try {
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(`SELECT * FROM category`);
                connection.release();

                return res.send(rows);
            } catch(err) {
                console.log('Query Error');
                connection.release();
                return false;
            }
        } catch(err) {
            console.log('DB Error');
            return false;
        }
    

});

module.exports = router;
